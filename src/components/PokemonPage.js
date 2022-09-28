import {React, useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

const [pokemons, setPokemons] = useState([])

const [isSearch, setIsSearch]=useState('');

const onSearch = (isSearch) => {
console.log(isSearch, "this is the pass down search function from app")
setIsSearch(isSearch)
}
const filterPokemons = pokemons.filter ((pokemon)=>{
  return pokemon.name.toLowerCase().includes(isSearch.toLowerCase())
});
console.log(filterPokemons)

const newPokemon = (pokemon) =>{
  console.log(pokemon)
  setPokemons([...pokemons, pokemon]);
}

useEffect (()=>{
  fetch('http://localhost:3001/pokemon')
.then(res => res.json())
.then(pokemons =>{
  console.log(pokemons);
  setPokemons(pokemons);
});
}, []);



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm newPokemon={newPokemon}/>
      <br />
      <Search onSearch = {onSearch} />
      <br />
      <PokemonCollection pokemons ={filterPokemons} />
    </Container>
  );
}

export default PokemonPage;
