import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowPokemon = () => {
  const [pokeList, setPokeList] = useState([]);
  const getPokemon = (e) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807ge")
      .then((res) => {
        console.log(res.data.results);
        setPokeList(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1>POKEMON</h1>
      <ul>
        {pokeList.map((pokemonUnit, i) => (
          <li key={i}>{`${pokemonUnit.name.toUpperCase()} 👹
          ${pokemonUnit.url}`}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShowPokemon;
