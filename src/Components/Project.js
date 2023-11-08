import React from 'react'
import { Link } from 'react-router-dom'
import { project1 } from '../imagedata'

const Project = (props) => {
    return (
        <div>
            <div className="container mx-auto mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src={project1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="https://doccure.dreamguystech.com/react/" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                                </div>
                                <div className='card-footer'>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>React</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>HTML</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>Boostrap</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                                </div>
                                <div className='card-footer'>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>React</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>HTML</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>Boostrap</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                                </div>
                                <div className='card-footer'>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>React</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>HTML</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>Boostrap</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                                </div>
                                <div className='card-footer'>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>React</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>HTML</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>Boostrap</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                                </div>
                                <div className='card-footer'>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>React</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>HTML</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>Boostrap</span>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                    <Link to="#" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                                </div>
                                <div className='card-footer'>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>React</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>HTML</span>
                                    <span className='badge rounded-pill text-dark bg-light' style={{padding: "5px 10px", margin: "5px"}}>Boostrap</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
