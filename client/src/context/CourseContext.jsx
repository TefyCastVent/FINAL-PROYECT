import { createContext, useState } from "react";

const CourseContext = createContext(null)

const ContextProvider = ({children}) => {
  const [courses, setCourses] = useState([])
  const [filterCourses, setFilterCourses] = useState([])
  const [sms, setSms] = useState ({type: ''})
  
  const handleFilterCourses = (value) => {
    const filtered = courses.filter(course => {
      return course.name.toLowerCase().match(value.toLowerCase())
    })
    
    if (filtered.length === 0) {
      setFilterCourses([])
      setSms({type: 'error',
              message: 'Busqueda no encontrada '})
    } else {
      setFilterCourses(filtered)
      setSms({type: 'success',
              message: 'Se encontró '})
    }
  }

  const initialValue = {
    setCourses,
    handleFilterCourses,
    filterCourses,
    sms
  }

  return (
      <CourseContext.Provider value={initialValue}>
        {children}
      </CourseContext.Provider>
  )
}

export {CourseContext, ContextProvider}