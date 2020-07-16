import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowPokemon = () => {
  const [pokeList, setPokeList] = useState([]);
  const [search, setSearch] = useState("");
  const [toDisplay, setToDisplay] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807ge")
      .then((res) => {
        console.log(res.data.results);
        setPokeList(res.data.results);
        setToDisplay(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setToDisplay(pokeList.filter((p) => p.name.includes(search)));
  }, [search]);

  return (
    <div>
      <h1>POKEMON</h1>
      <input type='text' onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {toDisplay.map((pokemonUnit, i) => (
          <li key={i}>{`${pokemonUnit.name.toUpperCase()} 👹
          ${pokemonUnit.url}`}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShowPokemon;
