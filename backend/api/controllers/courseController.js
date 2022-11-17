import Course from '../models/Course.js'

const createCourse = async (req, res) => {
    try {
      const {img} = req.body.img
      if(!img){
        req.body.img = 'https://www.edx.org/static/3258c951b30d41e305e3ea68584fadf7/aprende_calculo.jpg'
      }
      const newCourse = await Course.create(req.body);
      return res.json({
        msg: 'Course created',
        Movie: newCourse,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'error creating course',
        error,
      });
    }
  };

  const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        return res.json({
          msg: 'Courses found',
          data: courses
        })
      } catch (error) {
        return res.status(500).json({
          msg: 'Error displaying courses',
          error,
        })
      }
  };

  const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.find({_id:id});
        return res.json({
          msg: 'Course found',
          data: course
        })
      } catch (error) {
        return res.status(500).json({
          msg: 'Error displaying course',
          error,
        })
      }
  };

  const updateCourseById = async (req, res) => {
    try {
      const { id } = req.params;
      const updateCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
      return res.json({
        msg: 'Updated course',
        data: { course: updateCourse },
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error updating course',
        data: error,
      });
    }
  };
  
    
  const deleteCourseById = async (req, res) => {
    try{
      const { id } = req.params;
      // Buscar si existe el curso
      const course = await Course.findByIdAndDelete(id);
      return res.json({
        msg: 'Delated course'
      });
    }catch (error){
      return res.status(500).json({
        msg: 'Error delating course',
        error,
      });
    }
  };

  

export {createCourse, getAllCourses, getCourseById, updateCourseById, deleteCourseById}