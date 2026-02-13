
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { MovieContextProvider } from './context/MovieContext'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <MovieContextProvider>
      <AppRouter />
    </MovieContextProvider>
  )
}

export default App
