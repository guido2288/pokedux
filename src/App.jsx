import { useEffect, useState } from "react"
import PokemonList from "./components/PokemonList"
import Search from "./components/Search"
import logo from "./statics/logo.svg"
import { getPokemons } from "./api"

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <img src={logo} alt="pokedux" className="p-4"/>
      <Search />
      <PokemonList pokemons={pokemons}/>
    </>

  )
}

export default App
