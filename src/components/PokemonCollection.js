import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
//console.log(pokemons)
// const searchResult = !searchPokemon ? null : pokemon.filter((pokemon) =>
// pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
// );
  return (
    
    <Card.Group itemsPerRow={6}>
      {pokemons.map((pokemon) => {
     return <PokemonCard 
     key={pokemon.id} 
     hp={pokemon.hp} 
     name={pokemon.name} 
     front={pokemon.sprites.front}
    back={pokemon.sprites.back} />
      })};
    </Card.Group>
    
  );
}

export default PokemonCollection;
