import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useRef } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const { loginAuth } = useAuthContext()

    const email = useRef()
    const password = useRef()
  
    const handleSubmit = async (event) => {
        event.preventDefault()
        const values={
            email:email.current.value.trim() ,
            password:password.current.value.trim()}
        console.log(values)
        try {
         await loginAuth(values)
         navigate('/')
        } catch (error) {
         console.log(error)
        }
      }

    return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    )
}

export default Login