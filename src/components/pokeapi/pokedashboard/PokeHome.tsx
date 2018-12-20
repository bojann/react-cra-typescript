import React, { PureComponent } from "react";
import { debounce as _debounce, filter as _filter} from "lodash";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

import { fetchPokeData } from "services/fetchData";
import PokeItems from "components/pokeapi/pokedashboard/PokeItems";
import { POKEMON_API } from "components/enums";
import SearchInput from "components/pokeapi/pokesearch/SearchInput";
import withAuth from "components/contexts/user/withAuth";
import PokeToolbar from "components/pokeapi/pokemanagement/PokeToolbar";
import withSelectedPokemons from "components/contexts/pokemons/withSelectedPokemons";

import "./PokeHome.scss";

interface PokemonObj {
  url: string,
  name: string
}

interface Props {
  handleClickBtnCompare: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  handleClickAddPokemon: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  handleClickRemovePokemon: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  selectedItems: string[]
}

interface State {
  pokeResponse: PokemonObj[],
  filteredPokeResponse: PokemonObj[],
  active: number,
  limit: number,
  offset: number,
  count: number,
  pokeSearch: string,
  multiplePokemonsFlag: boolean
}

class PokeHome extends PureComponent<Props, State> {
  public static propTypes = {
    handleClickBtnCompare: PropTypes.func,
    handleClickAddPokemon: PropTypes.func,
    handleClickRemovePokemon: PropTypes.func,
    selectedItems: PropTypes.array
  };
  
  public state = {
    pokeResponse: [],
    filteredPokeResponse: [],
    active: 0,
    limit: 20,
    offset: 10,
    count: 0,
    pokeSearch: "",
    multiplePokemonsFlag: false
  };

  private filterItems = () => {
    const searchParam = this.state.pokeSearch;
    const filteredItems: PokemonObj[] = _filter(this.state.pokeResponse, (pokeItem: {name: string, url: string}) => {
      return pokeItem.name.indexOf(searchParam) !== -1;
    });

    this.setState({ filteredPokeResponse: filteredItems });
  };
  
  private debounceEvent = (timeout: number) => _debounce(this.filterItems, timeout);

  public handleChangeCheckbox = () => {
    this.setState(currentState => {
      return {
        multiplePokemonsFlag: !currentState.multiplePokemonsFlag
      };
    });
  };

  private getPokeData(selectedPoke: string ) {
    if(selectedPoke) {
      fetchPokeData({
        path: POKEMON_API.POKEMONS_PATH,
        selectedPoke: selectedPoke  === "all" ? "" : selectedPoke
      }).then(pokemons => {
        this.setState(() => {
          return {
            pokeResponse: pokemons.results,
            filteredPokeResponse: pokemons.results,
            count: pokemons.count
          };
        });
      });
    }
  }

  public componentDidMount() {
    this.getPokeData("all");
  }

  public handleChangeSearch = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const target =  ev.currentTarget;
    this.setState(
      {
        pokeSearch: target.value
      },
      this.debounceEvent(500)
    );
  };

  // public handleClickPokemon = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
  //   const target = ev.currentTarget;
  //  
  //   if(target.dataset.idname) {
  //     const selectedPoke: string = target.dataset.idname;
  //     this.getPokeData(selectedPoke);
  //   }
  // };

  public render() {
    const {
      handleClickBtnCompare,
      handleClickAddPokemon,
      handleClickRemovePokemon,
      selectedItems
    } = this.props;

    return (
      <>
        <SearchInput
          pokeSearch={this.state.pokeSearch}
          handleChangeSearch={this.handleChangeSearch}
        />
        <PokeToolbar
          handleChangeCheckbox={this.handleChangeCheckbox}
          selectedItems={selectedItems}
          handleClickBtnCompare={handleClickBtnCompare}
          multiplePokemonsFlag={this.state.multiplePokemonsFlag}
        />
        <ListGroup>
          <PokeItems
            handleClickAddPokemon={handleClickAddPokemon}
            handleClickRemovePokemon={handleClickRemovePokemon}
            multiplePokemonsFlag={this.state.multiplePokemonsFlag}
            pokemons={this.state.filteredPokeResponse}
            selectedItems={selectedItems}
          />
        </ListGroup>
      </>
    );
  }
}

// @ts-ignore
export default withAuth(withSelectedPokemons(PokeHome));