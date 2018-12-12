import React, { Component } from "react";

import withSelectedPokemons from "components/contexts/pokemons/withSelectedPokemons";
import PokeDetail from "components/pokeapi/pokedetails/PokeDetail";

import "./PokeCompare.scss";

interface Props {
  selectedItems: string[];
}

interface State {
  selectedItems: string[];
}

const storage = window.localStorage;

class PokeCompare extends Component<Props, State> {
  public state = {
    selectedItems: []
  };

  public componentDidMount() {
    let pokemons: string[] = [];
    const { selectedItems } = this.props;

    if (selectedItems && selectedItems.length) {
      pokemons = selectedItems;
    } else {
      const pokeLocalStorage = storage.getItem("selectedPokemons");
      if (pokeLocalStorage) {
        pokemons = JSON.parse(pokeLocalStorage);
      }
    }

    storage.setItem("selectedPokemons", JSON.stringify(pokemons));
    this.setState(() => {
      return {
        selectedItems: pokemons
      };
    });
  }

  private renderPokeCompareList = () => {
    return this.state.selectedItems.map(pokemon => {
      return <PokeDetail key={pokemon} pokemon={pokemon} />;
    });
  };

  public render() {
    return this.state.selectedItems.length ? (
      <div>{this.renderPokeCompareList()}</div>
    ) : null;
  }
}

export default withSelectedPokemons(PokeCompare);
