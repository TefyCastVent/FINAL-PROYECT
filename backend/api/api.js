import express from "express";
import courseRoutes from './routes/courseRotes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

const api = express();
api.use(cors())
api.use(express.json());

api.get('/status', ( req, res ) => {
    return res.json({
        msg: 'API en linea y funcionando'
    })
})

api.use(courseRoutes);
api.use(userRoutes)

export default api;