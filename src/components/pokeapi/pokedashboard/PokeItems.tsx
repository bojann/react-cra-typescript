import React, { PureComponent } from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link, RouteComponentProps } from "@reach/router";
import PropTypes from "prop-types";

import AddItemButton from "components/pokeapi/pokebuttons/AddItemButton";
import RemoveItemButton from "components/pokeapi/pokebuttons/RemoveItemButton";

const LIMIT_LENGTH = 16;

interface PokemonObj {
  url: string,
  name: string
}

interface Props {
  handleClickAddPokemon: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  handleClickRemovePokemon: (event: React.SyntheticEvent<EventTarget | HTMLSelectElement>) => void,
  multiplePokemonsFlag: boolean,
  pokemons: PokemonObj[]
}

class PokeItems extends PureComponent<Props, RouteComponentProps<{}>> {
  public static propTypes = {
    handleClickAddPokemon: PropTypes.func,
    handleClickRemovePokemon: PropTypes.func,
    multiplePokemonsFlag: PropTypes.bool,
    pokemons: PropTypes.array
  };
  
  public trimName = (name: string) => {
    return name.substring(0, LIMIT_LENGTH - 3) + "...";
  };

  public render() {
    const {
      multiplePokemonsFlag,
      handleClickAddPokemon,
      handleClickRemovePokemon,
      pokemons
    } = this.props;

    return pokemons.map((pokemon: PokemonObj) => {
      return multiplePokemonsFlag ? (
        <ListGroupItem key={pokemon.url}>
          <span className="list-group-item__poke-item">
            {pokemon.name.length > LIMIT_LENGTH
              ? this.trimName(pokemon.name)
              : pokemon.name}
          </span>
          <AddItemButton
            handleClickAddPokemon={handleClickAddPokemon}
            multiplePokemonsFlag={multiplePokemonsFlag}
            data-idname={pokemon.name}
          />
          <RemoveItemButton
            data-idname={pokemon.name}
            handleClickRemovePokemon={handleClickRemovePokemon}
          />
        </ListGroupItem>
      ) : (
        <Link
          to={`/pokemon/${pokemon.name}`}
          data-idname={pokemon.name}
          key={pokemon.url}
        >
          <ListGroupItem>
            <span className="list-group-item__poke-item">
              {pokemon.name.length > LIMIT_LENGTH
                ? this.trimName(pokemon.name)
                : pokemon.name}
            </span>
          </ListGroupItem>
        </Link>
      );
    });
  }
}

export default PokeItems;
