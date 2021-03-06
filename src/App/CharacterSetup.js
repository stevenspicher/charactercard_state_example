import { useState } from 'react';
import DisplayChar from "./DisplayCharacter.js"
let charUrl = "http://hp-api.herokuapp.com/api/characters"

function loadCharacter(setCharObj) {
    fetch(charUrl)
        .then(res => res.json())
        .then(data => {
            setCharObj(data[Math.floor(Math.random() * 20)])
        })
}

function CharacterSetup() {
    const [charObj, setCharObj] = useState({})
      return (
        <div className="cardframe">
         
            <DisplayChar props={charObj} loadChar ={() => loadCharacter(setCharObj)} /> 
               {/* note we are passing the local state (charObj) as a prop, and then 
            passing the function to set local state (setCharObj) */}
        </div>

    );
}

export default CharacterSetup;
