import React from "react";

import { PokemonContext } from "components/contexts/pokemons/PokemonContext";

const withSelectedPokemons = <P extends object>(ChildComponent: React.ComponentType<P>) => (props: any) => (
    <PokemonContext.Consumer>
      {pokemonContext => <ChildComponent {...props} {...pokemonContext} />}
    </PokemonContext.Consumer>
  );

export default withSelectedPokemons;
