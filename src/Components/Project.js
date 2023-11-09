import React from 'react'
import { Link } from 'react-router-dom'
import { DreamsHRMS, netflix, project1, weather } from '../imagedata'

const Project = (props) => {
    return (
        <div>
            <div className="container mx-auto mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src={project1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Doccure</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Doctor Appointment Booking System</h6>
                                <p className="card-text">This system helps to reduce the waiting time of the patient.
                                    User can select the appointment time according to his preference.
                                    Available and booked slots are shown in effective graphical user interface.</p>
                                <Link to="https://doccure.dreamguystech.com/react/" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                <Link to="https://github.com/Vijay-dev01/Doccure.git" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                            </div>
                            <div className='card-footer'>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>React</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>HTML</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>CSS</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>SCSS</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>TypeScript</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src={netflix} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Netflix-Clone</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Netflix Clone App built using React js</h6>
                                {/* <Link to="#" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link> */}
                                <Link to="https://github.com/Vijay-dev01/Netflix-Clone.git" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                            </div>
                            <div className='card-footer'>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>React</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>HTML</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>CSS</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Firebase</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>styled-components</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Boostrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src={weather} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Weather Application</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Weather Data</h6>
                                <p className="card-text">Weather map layers, consisting of wind, clouds, temperatures & more. It proves useful when you wish to create weather visualization within the app.</p>
                                <Link to="https://vijay-dev01.github.io/Weather-App/" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                <Link to="https://github.com/Vijay-dev01/Weather-App.git" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                            </div>
                            <div className='card-footer'>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>React</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>HTML</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Boostrap</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>CSS</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Firebase</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src={DreamsHRMS} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">DreamHRMS</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Human Resource Management System</h6>
                                <p className="card-text">A DreamHRMS uses software to store employee data and can ensure the smooth functioning of organisations.</p>
                                <Link to="https://dreamshrms.com" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                <Link to="https://github.com/Vijay-dev01/DreamsHRMS.git" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                            </div>
                            <div className='card-footer'>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>React</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>HTML</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>CSS</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>SCSS</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>TypeScript</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Redux</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Boostrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                <Link to="#" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                            </div>
                            <div className='card-footer'>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>React</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>HTML</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Boostrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${props.mode === 'light' ? 'light-card' : 'dark-card'}`} style={{ width: '25rem' }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fas fa-link"></i> Visit Site</Link>
                                <Link to="#" target="_blank" className={`btn ${props.mode === 'light' ? 'btn-dark' : 'btn-light'}`}><i className="fab fa-github"></i> Github</Link>
                            </div>
                            <div className='card-footer'>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>React</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>HTML</span>
                                <span className='badge rounded-pill text-dark bg-light' style={{ padding: "5px 10px", margin: "5px" }}>Boostrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
