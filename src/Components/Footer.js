import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <>
            <div >
            <div className={`Footer bg-${props.mode === 'light' ? 'white' : 'dark'}
    text-${props.mode === 'light' ? 'white' : 'dark'}`} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Vijay</span>CODES</h3>
                            <p className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex
                                ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} href="/">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} href="/">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} href="/">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} href="/">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} href="/">Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}><i className="fa-solid fa-phone-volume"></i> +91 9148505856</p>
                            <p className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}><i className="fa-solid fa-envelope"></i> vijayajay3535@gmail.com</p>
                            <p className={`text-${props.mode === 'light' ? 'dark' : 'white'}`}><i className="fa-solid fa-paper-plane"></i> Mysore, karnataka.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p className='text-white'>Design By Vijay Ganesh</p>
            </div>
            </div>
        </>
    )
}

export default Footer