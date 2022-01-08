import axios from "axios";
import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

function Home() {
  const [elements, setElements] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setElements(res.data.results);
      })
      .catch((err) => console.log(err));

    return () => cancel();
  }, [currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  if (loading) return <Loading />;

  return (
    <div className="home">
      <h1 className="home__title">Pokédex</h1>
      <input
        className="home__input"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        placeholder="Enter the name of a Pokémon"
      />
      <div className="home__items">
        {elements.map((element) => (
          <Card key={element.url} element={element} />
        ))}
      </div>
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPreviousPage={prevPageUrl ? goToPrevPage : null}
      />
    </div>
  );
}

export default Home;
