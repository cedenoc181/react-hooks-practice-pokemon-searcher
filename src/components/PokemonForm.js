import { React, useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ newPokemon }) {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHp, setPokemonHp] = useState("");
  const [pokemonFront, setPokemonFront] = useState("");
  const [pokemonBack, setPokemonBack] = useState("");

function handleNameChange(e){
  setPokemonName(e.target.value);
}
function handleHpChange(e) {
  setPokemonHp(e.target.value);
}
function handleFrontUrlChange(e) {
  setPokemonFront(e.target.value);
}
function handleBackUrlChange(e) {
  setPokemonBack(e.target.value);
}

function handleSubmit (e) {
  e.preventDefault();

  fetch('http://localhost:3001/pokemon', {
method: 'POST',
headers:{
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: pokemonName,
    hp: pokemonHp,
    sprites: {
    front: pokemonFront,
    back: pokemonBack
    }
  })
  })
  .then(res => res.json())
  .then((data) =>{ 
    console.log(data)
    newPokemon(data)
  });
  
  setPokemonName('')
  setPokemonHp('')
  setPokemonFront('')
  setPokemonBack('')
}


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
          label="Name" 
          placeholder="Name" 
          name="name"
          value={pokemonName}
          onChange={handleNameChange} 
          />
          <Form.Input fluid 
          label="hp" 
          placeholder="hp" 
          name="hp" 
          value={pokemonHp}
          onChange={handleHpChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokemonFront}
            onChange={handleFrontUrlChange}
  
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokemonBack}
            onChange={handleBackUrlChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
