import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PokemonList from "./components/PokemonList"
import Search from "./components/Search"
import logo from "./statics/logo.svg"
import { getPokemons } from "./api"
import { getPokemonsWithDetails } from "./actions"


function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      //const pokemonsDetails = await Promise.all(pokemonsRes.map(pokemon => getPokemonsDetails(pokemon)))

      //dispatch(setPokemons(pokemonsRes));
      dispatch(getPokemonsWithDetails(pokemonsRes))
    };


    fetchPokemons();
  }, []);

  return (
    <div className="bg-gray-100">
      <img src={logo} alt="pokedux" className="p-4 max-h-32 mx-auto"/>
      <Search />
      <PokemonList pokemons={pokemons}/>

    </div>
    

  )
}



export default App;
