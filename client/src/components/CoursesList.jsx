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
                  <h5 className='card-title text-center'>{index.name}</h5>
                </div>
                <button type="button" class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Más info
                </button>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">{index.name}</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      {index.description}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-light disabled">Estudiar</button>
                    </div>
                  </div>
                </div>
              </div>
          </article>
        </div>
      ))}
    </section>
  )
}

export default CoursesList