import PokemonCard from "./PokemonCard"

const PokemonList = ({pokemons}) => {
    console.log(pokemons)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 mx-2 my-2">
        {pokemons.map( (pokemon) => {
            return <PokemonCard name={pokemon.name} key={pokemon.name}/>
        }  )}

    </div>
  )
}

export default PokemonList