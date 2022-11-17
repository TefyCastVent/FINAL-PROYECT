import express from 'express'
import * as userController from '../controllers/userController.js'
import createUserValidator from '../middlewares/createUserValidator.js';
import loginUserValidator from '../middlewares/loginUserValidator.js';
import { checkAdmin } from '../middlewares/adminRoleValidator.js';
import { checkAdminLogin } from '../middlewares/adminLoginValidator.js';

const router = express.Router();

router.route('/register').post(createUserValidator,checkAdmin,userController.register);
router.route('/login').post(loginUserValidator, userController.login)
router.route('/users/:id').post(userController.getUserById)
router.route('/teachers').get(userController.getAllTeachers)
router.route('/teachers/:id').delete(checkAdminLogin,userController.deleteTeacherById).get(userController.getTeacherById)
export default router;