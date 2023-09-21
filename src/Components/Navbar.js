import React from 'react' 
import { Link } from "react-router-dom";

const Navbar = (props) => {
        const resumeLink = 'https://drive.google.com/file/d/13R7axr4uE-10RojRdutFX2_tewZLMR1C/view';
      
        const handleResumeClick = () => {
          window.open(resumeLink, '_blank');
        };

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-$
            {props.mode} `}>
                <div className="container py-2">
                    <Link className="navbar-brand" to="/home">Vijay G</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            {/* <li className="nav-item dropdown">
                                <Link className={`dropdown-toggle text-${props.mode === 'light' ? 'dark' : 'white'}`} to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className='nav-item'><Link className="dropdown-item" to="/">Follow Us</Link></li>
                                    <li className='nav-item'><Link className="dropdown-item" to="/">Education</Link></li>
                                    <li className='nav-item'><Link className="dropdown-item" to="/">Experience</Link></li>
                                </ul>
                            </li> */}
                            <li className="nav-item">
                                <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} to="/home">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} to="/services">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} to="/project">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`text-${props.mode === 'light' ? 'dark' : 'white'}`} onClick={handleResumeClick}>Resume</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`dropdown-toggle text-${props.mode === 'light' ? 'dark' : 'white'}`} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <div className="mx-3">
                                <button type="button" className="btn1 mx-2">Login</button>
                                <button type="button" className="btn2 mx-2">Sign Up</button>
                            </div>
                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                                <input className="form-check-input" type="checkbox" onClick={props.tooglemode} id="flexSwitchCheckDefault" />
                                <label className={`form-check-label text-${props.text}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode} Mode</label>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar