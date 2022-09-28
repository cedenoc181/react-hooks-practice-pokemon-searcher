import {React, useState} from "react";

function Search({ onSearch }) {

  const [searchPokemon,setSearchPokemon ] = useState('')


function handleSubmit(e){
  e.preventDefault()
console.log(searchPokemon);
onSearch(searchPokemon);
setSearchPokemon('')
}

  return (
    <div className="ui search">
      <div className="ui icon input">
        <form onSubmit={handleSubmit}>
        <input 
        onChange={(e)=> {setSearchPokemon (e.target.value) 
        console.log(e.target.value)
        }} 
        className="prompt" 
        placeholder="Search Pokemon!"
        value={searchPokemon}
        />
      <i className="search icon" /> 
        </form>
      </div>
    </div>
  );
}

export default Search;
