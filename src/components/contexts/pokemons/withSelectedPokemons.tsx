import React from "react";

import { PokemonContext } from "components/contexts/pokemons/PokemonContext";

const withSelectedPokemons = (ChildComponent: React.ComponentType) => (props: any) => {
  return (
    <PokemonContext.Consumer>
      {pokemonContext => <ChildComponent {...props} {...pokemonContext} />}
    </PokemonContext.Consumer>
  );
};

export default withSelectedPokemons;
