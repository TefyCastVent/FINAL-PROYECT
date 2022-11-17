import CoursesList from "../components/CoursesList"
import useCourseContext from "../hooks/useCourseContext"

const CoursesSearch = () => {
    const {filterCourses,sms} = useCourseContext()
    const long = filterCourses.length
    if (sms.type === 'error'){
        return (<p className='alert alert-danger' role='alert'>{sms.message}: {long} coincidences</p>)
    }
    
    if (sms.type === 'success'){
        return (
          <div>
            <p className='alert alert-success' role='alert'>{sms.message} : {long} coincidences</p>
            <CoursesList coursesList={filterCourses} />
          </div>
        )}
}

export default CoursesSearch