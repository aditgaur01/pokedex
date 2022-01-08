import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

const Card = ({ element }) => {
  const [pokemon, setPokemon] = useState({});
  const history = useHistory();
  const [types, setTypes] = useState([]);

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
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
      .then((res) => {
        setPokemon(res.data);
        setTypes(res.data.types.map((type) => type.type.name));
      });
  }, []);

  const handleOnClick = () => {
    history.push(`/pokemon/${element.name}`);
  };

  return (
    <div className="card" onClick={handleOnClick}>
      <img
        className="card__image"
        src={pokemon?.sprites?.other?.dream_world?.front_default}
        alt="Image"
      />
      <h2 className="card__title">
        {element?.name?.charAt(0).toUpperCase() + element?.name?.slice(1)}
      </h2>
      <div className="card__types">
        {types.map((type) => (
          <p key={type} style={{ backgroundColor: typeColors[type] }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
