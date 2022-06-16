import React, { useState } from 'react'

export default function Todo() {

    const [state, setstate] = useState([])
    const [myInput, setmyInput] = useState("")
    const getval = (e) => {
        setmyInput(e.target.value)
    }

    return (
        <div>

            <input value={myInput} type="text" onChange={getval} />

            <button onClick={() => {
                setstate([...state, myInput])
                setmyInput("")
            }}>add</button>

            {
                state.map((item, ) => {
                    return <div key={item} className='d-flex'>
                        <h1>{item}</h1>
                        
                    </div>

                })
            }

            


        </div>
    )
}
