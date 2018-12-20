import React, {Component} from "react";
// import axios from "axios";
import { navigate } from "@reach/router";

import { POKE_MAX_ITEM_LIMIT } from "components/enums";
// import {fetchPokeData} from "services/fetchData";


interface State {
  selectedItems: string[],
  handleClickAddPokemon: (event: React.SyntheticEvent<HTMLSelectElement>) => void,
  handleClickBtnCompare: (event: React.SyntheticEvent<HTMLSelectElement>) => void,
  handleClickRemovePokemon: (event: React.SyntheticEvent<HTMLSelectElement>) => void
}

interface Props {
 children: React.ReactNode 
}

export const PokemonContext = React.createContext(null);

export class PokemonContextProvider extends Component<Props, State> {
  public handleClickAddPokemon = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    const target = ev.currentTarget;
    const idName = target.dataset && target.dataset.idname;
    
    if (idName && this.state.selectedItems.length < POKE_MAX_ITEM_LIMIT) {
      const parentOfTarget = target.parentElement;
      const isListItem = parentOfTarget && parentOfTarget.className === "list-group-item";
      if(parentOfTarget && isListItem) {
        parentOfTarget.classList.add("list-group-item--selected");
      }
      
      this.setState((currentState) => {      
        const newStateOfSelectedItems = [...currentState.selectedItems, idName];
        const filteredList = new Set(newStateOfSelectedItems);

        return {
          selectedItems: Array.from(filteredList)
        };
      });
    }    
  };

  public handleClickRemovePokemon = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    const removedItemText = ev.currentTarget.value;
    const newSelectedItemList = this.state.selectedItems.filter(
      item => item !== removedItemText
    );

    this.setState(() => {
      return { selectedItems: newSelectedItemList };
    });
  };

  public handleClickBtnCompare = () => {
    navigate("pokemon/compare");
    // const requestArr = this.state.selectedItems.map(selectedPoke => {
    //   return fetchPokeData({
    //     path: POKEMON_API.POKEMONS_PATH,
    //     selectedPoke: selectedPoke
    //   });
    // });
    //
    // axios
    //   .all(requestArr)
    //   .then(selectedPokeResponses => {
    //     const pokes = selectedPokeResponses.map(poke => {
    //       return poke;
    //     });
    //
    //     this.setState(
    //       () => {
    //         return {
    //           pokeCompareArray: pokes
    //         };
    //       },
    //       () => {
    //         navigate("pokemon/compare");
    //       }
    //     );
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };
  
  public state = {
    selectedItems: [],
    handleClickAddPokemon: this.handleClickAddPokemon,
    handleClickBtnCompare: this.handleClickBtnCompare,
    handleClickRemovePokemon: this.handleClickRemovePokemon
  };

  public render() {
    console.log("%c  BA :********* ","background: orange;", this.state.selectedItems);
    // @ts-ignore
    return <PokemonContext.Provider value={this.state}>
        {this.props.children}
      </PokemonContext.Provider>
  }
}
