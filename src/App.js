import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [azukis, setAzukis] = useState([]);
  const [filteredAzukis, setFilteredAzukis] = useState(azukis);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://6238fda700ed1dbc5ab97a21.mockapi.io/azukis")
      .then((response) => response.json())
      .then((fetchedAzukis) => setAzukis(fetchedAzukis));
  }, []);

  useEffect(() => {
    const newFilteredAzukis = azukis.filter((azuki) =>
      azuki.name.toLowerCase().includes(searchField)
    );
    setFilteredAzukis(newFilteredAzukis);
  }, [searchField, azukis]);

  const handleSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Azuki Rolodex</h1>
      <SearchBox
        className="azukis-search-box"
        placeholder="search Azukis"
        onChangeHandler={handleSearchChange}
      />
      <CardList azukis={filteredAzukis} />
    </div>
  );
};

export default App;
