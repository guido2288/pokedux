import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PokemonList from "./components/PokemonList"
import Search from "./components/Search"
import logo from "./statics/logo.svg"
import { getPokemons } from "./api"
import { getPokemonsWithDetails, setLoading } from "./actions"


function App() {

  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      dispatch(getPokemonsWithDetails(pokemonsRes))
      
      setTimeout(()=> {
        dispatch(setLoading(false))
      }, 1000)
    };


    fetchPokemons();
  }, []);

  return (
    <div className="bg-gray-100">
      <img src={logo} alt="pokedux" className="p-4 max-h-32 mx-auto"/>
      <Search />
      <PokemonList pokemons={pokemons} loading={loading}/>

    </div>
    

  )
}



export default App;
