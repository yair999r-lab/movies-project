import { Link, Outlet } from "react-router-dom"
import { useLocalStorge } from "../store/useLocalStorage"
import "./HeaderLayout.css"


const HeaderLayout = () => {
    const listOfFav = useLocalStorge((state) => state.listOfFav)
  return (
    <>
    <h2 className="header">IMDB האתר של המדינה</h2>
    <nav className="nevber">
        <Link to="/movies">movies</Link>
        <Link to="/movies/Favorites">Favorites({listOfFav.length})</Link>
    </nav>
    <Outlet/>
    
    <footer> <h6>אתר זה מוגש אליכם ע"י שמעון </h6></footer>
    </>
    
)}

export default HeaderLayout