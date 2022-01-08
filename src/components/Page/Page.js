import "./Page.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);

  const typeColors = {
    normal: "#eba62f",
    grass: "#17b05f",
    poison: "#63288a",
    fire: "#e25822",
    water: "#3396cd",
    bug: "#6d7815",
    flying: "#a890f0",
    ground: "#e0c068",
    electric: "#f8d030",
    fairy: "#ee99ac",
    fighting: "#c03028",
    psychic: "#f85888",
    rock: "#b8a038",
    steel: "#b8b8d0",
    ice: "#98d8d8",
    ghost: "#705898",
    dragon: "#7038f8",
    dark: "#705848",
  };

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemon(res.data);
      setTypes(res.data.types.map((type) => type.type.name));
      setAbilities(res.data.abilities.map((ability) => ability.ability.name));
      console.log(res.data);
    });
  }, []);

  const deciMeterToCentiMeterFormatted = (number) => {
    return (number * 10).toString() + " cm";
  };

  const hectoGramToKiloGramFormatted = (number) => {
    return (number / 10).toString() + " kg";
  };

  return (
    <div className="page">
      <img
        className="page__image"
        src={pokemon?.sprites?.other?.dream_world?.front_default}
        alt="Image"
      />
      <div
        className="page__curve"
        style={{
          backgroundColor: typeColors[types[0]],
        }}
      ></div>
      <div className="page__information">
        <h1
          className="page__title"
          style={{
            color: typeColors[types[0]],
          }}
        >
          {pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)}
        </h1>
        <div>
          <h1>Height</h1>
          <h2 style={{ color: typeColors[types[0]] }}>
            {deciMeterToCentiMeterFormatted(pokemon?.height)}
          </h2>
        </div>
        <div style={{ marginTop: "40px" }}>
          <h1>Weight</h1>
          <h2 style={{ color: typeColors[types[0]] }}>
            {hectoGramToKiloGramFormatted(pokemon?.weight)}
          </h2>
        </div>
        <div style={{ marginTop: "40px" }}>
          <h1>Abilities</h1>
          <div className="page__abilitiesContainer">
            {abilities.map((ability) => (
              <h2
                className="page__ability"
                style={{ backgroundColor: typeColors[types[0]] }}
              >
                {ability}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
