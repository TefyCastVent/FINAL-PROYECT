import express from 'express'
import * as courseController from '../controllers/courseController.js'
import createCourseValidator from '../middlewares/createCourseValidator.js';
import { checkAdminLogin } from '../middlewares/adminLoginValidator.js';

const router = express.Router();

router.route('/courses').post(createCourseValidator,checkAdminLogin, courseController.createCourse)
                        .get(courseController.getAllCourses)
router.route('/courses/:id').get(courseController.getCourseById)
                    .delete(checkAdminLogin,courseController.deleteCourseById)
                    .put(checkAdminLogin,courseController.updateCourseById);

export default router;