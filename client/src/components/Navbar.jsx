import {Link, useNavigate} from 'react-router-dom'
import useCourseContext from '../hooks/useCourseContext'
import { useRef } from 'react'
import '../App.css'

function Navbar() {
  const { handleFilterCourses } = useCourseContext()
  const navigate = useNavigate()
  const searchRef = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    const trimValue = searchRef.current.value.trim()
    if ( trimValue !== ''){
      handleFilterCourses(trimValue)
      navigate('/coursesSearch', {replace: true})
    }
    event.target.reset()
  }



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">SPower</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item wh">
              <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">🔍</button>
              </form>
            </li>
              <li className="nav-item">
               <a className="nav-link" href="#">ENSEÑA</a>
              </li >
                      
            
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar