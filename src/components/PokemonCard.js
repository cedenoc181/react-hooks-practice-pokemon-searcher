import {React, useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({hp,  front, back, name}) {



const [togglePokemon, setTogglePokemon] = useState(true);

function handleClick(){
setTogglePokemon(!togglePokemon);
};

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleClick} src={togglePokemon ? front : back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
