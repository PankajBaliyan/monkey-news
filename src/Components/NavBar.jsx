import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Monkey News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/business" className="dropdown-item">business</Link>
                                    </li>
                                    <li>
                                        <Link to="/entertainment" className="dropdown-item">entertainment</Link>
                                    </li>
                                    <li>
                                        <Link to="/general" className="dropdown-item">general</Link>
                                    </li>
                                    <li>
                                        <Link to="/health" className="dropdown-item">health</Link>
                                    </li>
                                    <li>
                                        <Link to="/science" className="dropdown-item">science</Link>
                                    </li>
                                    <li>
                                        <Link to="/sports" className="dropdown-item">sports</Link>
                                    </li>
                                    <li>
                                        <Link to="/technology" className="dropdown-item">technology</Link>
                                    </li>
                                    {/* <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
