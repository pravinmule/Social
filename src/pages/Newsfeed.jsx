import React, { useState } from 'react'

export default function Newsfeed() {
  const [add, setadd] = useState(122)
  const [state, setstate] = useState([])
  const [myInput, setmyInput] = useState("")

  const increase = () => {
    setadd(add + 1)
  }

  const getval = (e) => {
    setmyInput(e.target.value)
    e.target.reset();
  }

  const handlecomment = (e) => {
    e.preventDefault()
    setstate([...state, myInput])
  }

  return (
    <div className='container-fluid  bg-gradient-to-r from-sky-500 to-indigo-500 '>
      <div className='row h-screen'>
        <div className='col-md-3'>
          <div className='card-body h-screen'>
            <div className="d-flex flex-column font-mono  text-center items-center bg-gradient-to-r from-purple-500 to-pink-500   h-screen">

              <button className='btn my-3 w-32 font-bold text-white bg-teal-800'>Profile</button>
              <button className='btn my-3 w-32 font-bold text-white bg-teal-800'>Home</button>
              <button className='btn my-3 w-32 font-bold text-white bg-teal-800'>Setting</button>
              <button className='btn my-3 w-32 font-bold text-white bg-teal-800'>Save</button>

            </div>
          </div>
        </div>
        <div className='col-md-6 '>
          <div className="card   bg-slate-500">
            <div className="card-header flex bg-slate-600">
              <h1 className=' font-bold font-sans text-white '>Newsfeed</h1>
              <button type='file' className='mx-7 btn btn-light btn-sm' >Uplaod Video</button>
            </div>


            <div className='card-body   '>
              <div className='h-screen '  >
                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="" height={500} width={600} />

                <a href="#" className="btn my-2 btn-info btn-sm " onClick={increase}>
                  <span className="glyphicon glyphicon-heart"></span>  Like
                  <span className="badge badge-dark text-dark">{add}</span>
                </a>  <br />

                <div className=" mt-2  ">
                  <button className='btn btn-dark' name="Reset" onClick={handlecomment}>Comment</button>
                  <input className='mx-2 text-center rounded-lg' type="text" onChange={getval} />
                </div>

                {

                  state.map((item) => {
                    return <div key={item}
                      className=' justify-center rounded-lg my-2 w-40 bg-danger text-center  text-white'>
                      <h1  >{item}</h1>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card-body'>
            <div className="d-flex flex-column font-mono  text-center items-center bg-gradient-to-r from-purple-500 to-pink-500  h-screen">
              <button className='btn my-3 w-32 font-bold text-white bg-teal-800'>Setting</button>
              <button className='btn my-3 w-32 font-bold text-white bg-teal-800'>Photos</button>
              <button className='btn my-3 w-32 font-bold text-white bg-teal-800'>Video</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
