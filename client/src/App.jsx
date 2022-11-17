import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { ContextProvider } from './context/CourseContext'

function App() {
  return (
    <ContextProvider>
      <Navbar/>
      <Outlet/>
    </ContextProvider>
  )
}

export default App
