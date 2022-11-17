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
        <Link className="navbar-brand" to="/">
          <img src="https://familytransitionplace.ca/wp-content/uploads/2022/06/Power-logo_black_no-tagline-Mar-2014.jpg" alt="Bootstrap" width="100rem" height="45"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item wh">
              <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">🔍</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar