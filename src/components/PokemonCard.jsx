const PokemonCard = ({name, image,id, types}) => {

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="absolute top-2 right-2">
        <svg className="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      </div>
      <div className="flex justify-center">
        <img src={image} alt={name}/>

      </div>


      <div className="p-2">
        <h3 className="b-2 text-xl font-bold tracking-tight text-gray-900 text-center">{name}</h3>
        <p className="text-center text-md text-gray-500">N.°{id}</p>
      </div>
      <div className="flex justify-around px-4 py-4">
        {
          types.map(({type}) => {
            return (
              <p className={`types ${type.name} p-2 rounded-lg text-white`} key={type.name}>{type.name}</p>
            )

          })
        }
        <p></p>
      </div>
    </div>
  )
}

export default PokemonCard