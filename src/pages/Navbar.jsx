import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand h1" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID" aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav">
                        <Link className="nav-link active h3" aria-current="page" to="/signup">Signup</Link>
                        <Link className="nav-link active h3" aria-current="page" to="/login">Login</Link>
                        <Link className="nav-link active h3" aria-current="page" to="/newsfeed">Newsfeed</Link>

                    </div>
                </div>
                <form className="form-inline flex my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                    <button className="btn bg-slate-700 btn-success  text-white my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}



