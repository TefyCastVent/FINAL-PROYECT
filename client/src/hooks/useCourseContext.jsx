import { useContext } from "react"
import { CourseContext } from "../context/CourseContext"
const useCourseContext = () => {
  const context = useContext (CourseContext)
  
  // Creamos un error para el contexto en caso de que no se encuentre
  if (!context) throw new Error ('There is no active context')

  return context
}

export default useCourseContext