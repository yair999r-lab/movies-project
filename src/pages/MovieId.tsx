import { useNavigate, useParams } from "react-router-dom"
import useFatch from "../customHook/useFetch"
import type { Movie } from "./Movies"
import { useLocalStorge } from "../store/useLocalStorage"
import "./MovieId.css"


const MovieId = () => {
    const navigate = useNavigate()
    const {listOfFav, toggelFev} = useLocalStorge()

    const {id} = useParams()
    if (!id) return <h4 className="lodaing">טוען...</h4>;
    const {data: movie, loading, error} = useFatch<Movie>(`http://localhost:4000/movies/${id}`)


    if(loading) return <h4 className="lodaing">הנתונים הטעינה אנא המתן...</h4>
    if(error || !movie) return <h4 className="error">קרטה שגיאה {error}</h4>

  return (
    <div className="card-movie">
      <button className="back-but" onClick={() => navigate(-1)}>חזרה</button>
      <div className="movie-detale">
      <div className="img-movie">
        <img src={movie.posterUrl} alt={movie.title}/>
      </div>
      <div className="movie-info-box">
        <h1>{movie.title}</h1>

      <div className="movie-mor-info">
      <span className="bdage">שנה: {movie.year}</span>
      <span className="bdage">דירוג: {movie.rating}</span>
      <span className="bdage">הכנסות: {movie.boxOffice}</span>
      </div>

      <p className="director">
        <strong>במאי:</strong> {movie.director}
      </p>

      <p className="actors">
        <strong>שחקנים ראשיים:</strong> {movie.actors.join(', ')}
      </p>

      <p className="movie-summary">
        {movie.description}
      </p>
      {listOfFav.includes(movie.id)
                ? <button onClick={(e) => {e.stopPropagation(); toggelFev(movie.id)}} className='remove fav-but'>הסרה ממועדפים</button>
                : <button onClick={(e) => {e.stopPropagation(); toggelFev(movie.id)}} className='add fav-but'>הוספה למועדפים</button>}
      </div>


      </div>



    </div>
  )
}

export default MovieId