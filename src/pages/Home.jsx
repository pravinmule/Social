import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="landing-page">
            <div className="wrapper">
                <div className="d-flex flex-column text-center justify-content-center align-items-center h-50">
                    <h2 className="display-3 animated slideInDown">  Home Page</h2>
                    <p className="lead px-3 animated slideInUp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda doloremque ea eaque, eligendi eos eum exercitationem laboriosam libero odit porro provident quia quidem sed similique suscipit voluptatem voluptatibus, voluptatum?</p>
                    <Link to="/signup">
                        <button className="bg-blue-500 hover:bg-blue-700 text-dark  my-2 px-4 border border-blue-700 rounded">
                            Signup
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    )
}
