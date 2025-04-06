import { useState } from "react"


export default function counter(){

    const [count, setcount] = useState(0);
    const handelAdd = ( ) =>{
        const newCount = count+1
        setcount(newCount)
    }
 
    const counterStyle = {
        border: '2px solid yellow'
    }

    return(
        <div style={counterStyle}>
            <h3>count: {count}</h3>
            <button onClick={handelAdd}>Add </button>
        </div>
    )
}