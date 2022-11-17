import jwt from 'jwt-simple'
import User from '../models/User.js'
import configDB from '../config/index.js'

const checkAdminLogin = async(req, res, next) => {
      try{
        // Buscamos el token 
        const token = req.headers.authorization;
        // Si no hay token
        if(!token) {
          return res.status(500).json({
                 msg: "No session"
          })
        }
        // Si pasa, entonces buscamos el payload
        const payload = jwt.decode(token, configDB.jwt.secret)
        // Falta verificar si el token esta a tiempo , esta más abajo pero no funciona
        // Si pasa, buscar al usuario
        const user = await User.findById(payload.userId)
        // Si no hay usuario
        if(!user){
          return res.status(401).json({
                msg: 'Invalid Token',
          })
        }
        // Si el usuario no es administrador
        if(payload.role != "Administrator" ){
          return res.status(500).json({
                  msg: "No authorization"
          })
        }
        const expirationDate = new Date(payload.expirationDate);
        if(expirationDate.getTime() < new Date().getTime()){
            return res.status(400).json({
                msg: "El token expiro",
            });
        }
        next();
      }catch (error) {
            return res.status(401).json({
                msg: 'Authorization error'
            })
      } 
};
export {checkAdminLogin}