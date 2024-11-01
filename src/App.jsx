import { RouterProvider } from 'react-router-dom'
// import './App.css'
import { router } from './components/Routes/Routes.jsx'

function App() {

  return (
    <div className='md:max-w-[90%] mx-auto '>
      <RouterProvider router={router}>
    
    </RouterProvider>
    </div>
  )
}

export default App
