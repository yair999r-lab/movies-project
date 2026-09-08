import { useMemo } from "react"
import useFatch from "../customHook/useFetch"

import type { Movie } from "./Movies"
import MoviesList from "../compo/MoviesList"
import { useLocalStorge } from "../store/useLocalStorage"

const Favorites = () => {

    const favovMovies = useLocalStorge<number[]>((state) => state.listOfFav)
    const {data: movies, loading, error} = useFatch<Movie[]>("http://localhost:4000/movies")
    
    const favoritsMovies = useMemo(() => {
        if(!movies) return []
        return movies.filter((movie) => (favovMovies.includes(movie.id)))
    }, [movies, favovMovies])

    if(loading) return <h4 className="loading">הנתונים הטעינה אנא המתן...</h4>
    if(error) return <h4 className="error">קרטה שגיאה {error}</h4>


  return (
    <div><MoviesList movies={favoritsMovies}/></div>
  )
}

export default Favorites