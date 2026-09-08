import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import HeaderLayout from './layout/HeaderLayout'
import Movies from './pages/Movies'
import Favorites from './pages/Favorites'
import MovieId from './pages/MovieId'


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<HeaderLayout/>}>
    <Route path='/Movies' element={<Movies/>}/>
    <Route path='/Movies/:id' element={<MovieId/>}/>
    <Route path='movies/Favorites' element={<Favorites/>}/>
    

    </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
