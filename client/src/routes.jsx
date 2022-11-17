import { Children } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import App from './App'
import CoursesSearch from './pages/CourseSearch'
import Home from './pages/Home'


const Paths = () => {
    const element = useRoutes ([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    element: <Home/>,
                    index: true
                },
                {
                    path: 'coursesSearch',
                    element: <CoursesSearch/>
                }
            ]
        }
    ])
    return element
}

export default Paths