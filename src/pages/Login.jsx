import React, { useState } from 'react'

export default function Login() {


    return (

        <div className="  flex  justify-center signupage">

            <div className="w-full py-4 max-w-md">
                <form className="  bg-slate-300 shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                    <div className="text-gray-800 text-2xl flex justify-center border-b-2 border-fuchsia-600 py-2 mb-4">
                        Login
                    </div>
                    <div className="mb-4">
                        <label className=" text-gray-700 text-sm font-normal mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="text-gray-700 text-sm font-normal mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none " v-model="form.password" type="password" placeholder="Password" name="password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Link to="/newsfeed">
                        <button className="px-4 py-2 rounded text-white  shadow-lg bg-blue-500 hover:bg-blue-600 " type="submit">Sign In</button>
                        </Link>
                        <a className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>

                </form>

            </div>
        </div>
    )
}
