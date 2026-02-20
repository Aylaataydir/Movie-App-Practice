
import './App.css'
import { MovieContextProvider } from './context/MovieContext'
import AppRouter from './router/AppRouter'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'ldrs/react/DotSpinner.css'

// Default values shown


function App() {



  return (
    <MovieContextProvider>
      <AppRouter />
      <ToastContainer theme="dark" />
    </MovieContextProvider>
  )
}

export default App
