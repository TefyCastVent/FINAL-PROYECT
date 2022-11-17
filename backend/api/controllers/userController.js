import bcrypt from 'bcrypt';
import jwt from 'jwt-simple'
import configDB from '../config/index.js'
import User from '../models/User.js';

const register = async(req, res) => {
    try {
        // Encriptando el password enviado desde el body, pasando algoritmo 4 veces
        const encryptedPass = await bcrypt.hash(req.body.password, 4);
        req.body.password = encryptedPass;
        // Buscamos si hay foto
        const photo = req.body.photo
        if(!photo){
          req.body.photo = `https://robohash.org/${req.body.name}?set=set2&size=180x180`
        }
        // Creamos el usuario con su password encriptado
        const user = await User.create(req.body);
        // Ocultamos la encriptación
        user.password = undefined;
        return res.json({
            msg: 'Created user',
            data: {user}
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'An error occurred while registering user',
            error
        })
    }
}

const login = async (req, res) => {
    try {
        // Buscamos un usuario con el correo 
        const user = await User.findOne({
            email: req.body.email,
        });
        // Si no lo encuentra
        if (!user) {
            return res.status(404).json({
            msg: 'User not found',
        });
        }
        // Si encuentra el usuario verificamos la contraseña
        const passCorrect = await bcrypt.compare(req.body.password, user.password);
        // Si esta mal la contraseña    
        if (!passCorrect) {
            return res.status(401).json({
            msg: 'Invalid credentials',
            });
        }
        // Si todo va bien, crear token con tiempo
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 60);
        const payload = {
            userId: user.id,
            expirationDate,
            role: user.role,
        };
        // Falta en el index de config la llave
        const token = jwt.encode(payload, configDB.jwt.secret);
      return res.json({
        msg: 'Correct login',
        data: { token },
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Login error',
      });
    }
  };

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await User.find({role: "Teacher"});
        return res.json({
          msg: 'Teachers found',
          data: teachers
        })
      } catch (error) {
        return res.status(500).json({
          msg: 'Error displaying teachers',
          error,
        })
      }
};

const getTeacherById = async (req, res) => {
  try {
      const { id } = req.params;
      const teacher = await User.find({_id:id, role: "Teacher"});
      return res.json({
         teacher
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error displaying teacher',
        error,
      })
    }
};

const deleteTeacherById = async (req, res) => {
  try{
    const { id } = req.params;
    // Buscar si existe el curso
    const teacher = await User.findByIdAndDelete({_id: id, role: 'Teacher'});
    return res.json({
      msg: 'Delated teacher'
    });
  }catch (error){
    return res.status(500).json({
      msg: 'Error delating teacher',
      error,
    });
  }
};

const getUserById = async (req, res) => {
  try {
      const { id } = req.params;
      const teacher = await User.find({_id:id});
      return res.json({
        teacher
      })
    } catch (error) {
      return res.status(500).json({
        msg: 'Error displaying teacher',
        error,
      })
    }
};



export {register,login, getAllTeachers, getTeacherById,deleteTeacherById, getUserById}