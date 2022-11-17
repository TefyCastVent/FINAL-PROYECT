import { useEffect } from 'react'
import Corusel from '../components/Corusel'
import CoursesList from '../components/CoursesList'
import useCourseContext from '../hooks/useCourseContext'
import useFetcher from '../hooks/useFetcher'

const Home = () => {
  const { setCourses } = useCourseContext()
  const {data, error } = useFetcher('http://localhost:4000/courses')
  //Si hay error
  if (error) return <p>{error.message}</p>
  //Si no hay error
  const listCourses = data.data
  useEffect(()=>{setCourses(listCourses)},[])
  return (
    <>
      <Corusel/>
      <CoursesList coursesList={listCourses}/>
    </>

  )
}

export default Home