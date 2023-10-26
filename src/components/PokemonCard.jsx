const PokemonCard = ({name, image,id, types , loading}) => {

  return (
    <>
    {
       loading ? (
        <div className="relative max-w-sm flex flex-col items-center justify-center h-[238px] bg-gray-400 animate-pulse rounded-lg shadow">
          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          </svg>
          <div className="flex flex-col justify-center items-center">
            <div className="h-2.5 bg-gray-200 rounded-full w-24 my-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-12"></div>
          </div>
        </div>
       ) : (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="absolute top-2 right-2">
        <svg className="w-6 h-6 text-gray-300 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
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

  </>

  )
}

export default PokemonCard