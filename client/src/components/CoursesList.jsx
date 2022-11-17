import React from 'react'
import useFetcher from '../hooks/useFetcher'

const CoursesList = ({coursesList}) => {
  return (
    <section className='row py-5 gy-4'>
      {coursesList.map((index,key) => (
        <div key={key} className='col-3 col-sm-6 col-md-6 col-lg-3'>
          <article className='card border-secondary'>
                <img className='card-img-top' src={index.img} alt={index.name} />
                <div className="card-body">
                  <h5 className='card-title'>{index.name}</h5>
                </div>
          </article>
        </div>
      ))}
    </section>
  )
}

export default CoursesList