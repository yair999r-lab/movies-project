import  { useEffect, useMemo, useRef, useState } from 'react'
import useFatch from '../customHook/useFetch'
import MoviesList from '../compo/MoviesList';
import "./Movies.css"

export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  actors: string[];
  description: string;
  rating: number;
  boxOffice: number;
  posterUrl: string;
}

const Movies = () => {

    const {data: movies, loading, error} = useFatch<Movie[]>("http://localhost:4000/movies")
    const [search, setSearch] = useState<string>("")
    const searchRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      searchRef.current?.focus();
    }, [loading])

    const filterData = useMemo(() => {
        if(!movies) return []
        return movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    }, [movies, search])

    
    if(loading) return <h4 className="loading">הנתונים הטעינה אנא המתן...</h4>
    if(error) return <h4 className="error">קרטה שגיאה {error}</h4>


    
  return (
    <div>
        <input id='search' ref={searchRef} type="text" name="search" placeholder='חפש סרט לפי שם...' onChange={(e) => setSearch(e.target.value)}/>
        <MoviesList movies={filterData}/>
    </div>
  )
}

export default Movies