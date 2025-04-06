import { useEffect, useState } from "react"

export default function Players(){
    const [player, setPlayers] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setPlayers(data))
    })


    return(
        <div className="card">
            <h3>Players:{player.length} </h3>
            <ol>
            {
                player.map(player => <li>{player.name}</li>)
            }
            </ol>
        </div>
    )
}