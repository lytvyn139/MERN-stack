import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowPokemon = () => {
  const [pokelist, setPokelist] = useState([]);
  const [todisplay, setTodisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [pokedetails, setPokedetails] = useState({ name: "...", sprites: [] });

  const getDetails = (pkmn) => {
    console.log(pkmn);
    axios
      .get(pkmn.url)
      .then((res) => {
        console.log(res.data);
        setPokedetails(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=870")
      .then((res) => {
        console.log(res.data.results);
        setPokelist(res.data.results);
        setTodisplay(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTodisplay(pokelist.filter((p) => p.name.includes(search)));
  }, [search]);

  return (
    <div>
      <h1>POKEMON</h1>
      <div className='container'>
        <div className='pokemon-list'>
          <input type='text' onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className='pokemon-list'>
          <ul>
            {todisplay.map((pkmn, i) => (
              <li
                key={i}
                className='list-group-item'
                onClick={(e) => getDetails(pkmn)}>
                {pkmn.name}
              </li>
            ))}
          </ul>
        </div>

        <div className='pokemon-img'>
          <img src={pokedetails.sprites.front_default} />
          <img src={pokedetails.sprites.back_default} />
        </div>
      </div>
    </div>
  );
};
export default ShowPokemon;
