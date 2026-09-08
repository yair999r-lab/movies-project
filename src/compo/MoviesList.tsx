
import type { Movie } from '../pages/Movies'
import { useNavigate } from 'react-router-dom'
import { useLocalStorge } from '../store/useLocalStorage'
import "./MoviesList.css"

interface listMovies {
    movies: Movie[]
}

const MoviesList = ({movies}: listMovies) => {
    const {listOfFav, toggelFev} = useLocalStorge()
    const navigate = useNavigate()

    
    if(movies.length === 0) return ( 
        <div className="empty-state">
    <span className="empty-icon">🎬</span>
    <h2>לא נמצאו סרטים...</h2>
    <p>אולי כדאי לנסות שם אחר או לבדוק את האיות.</p>
    </div>
    )
   

  return (
    <article className='movieCards'>
        {movies.map((movie) => (
            <div onClick={() => navigate(`/movies/${movie.id}`) } className='movieCard' key={movie.id}>
                <img className='img-card' src={movie.posterUrl}/>
                <div>
                    <h3 className='title'>{movie.title}</h3>
                    {listOfFav.includes(movie.id)
                    ? <button onClick={(e) => {e.stopPropagation(); toggelFev(movie.id)}} className='remove fav-but'>הסרה ממועדפים</button>
                    : <button onClick={(e) => {e.stopPropagation(); toggelFev(movie.id)}} className='add fav-but'>הוספה למועדפים</button>}
                </div> 
            </div>
        ))}
    </article>
  )
}

export default MoviesList