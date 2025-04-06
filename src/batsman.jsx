import { useState } from "react"


export default function Batsman(){
    const [sixes, setSixes]= useState(0);

    const [runs, setRuns] = useState(0)

    const handlesingle =() => {
        const updatdRunse = runs + 1;
        setRuns(updatdRunse)
    }

    const hendleSix =() => {
        const updatdRunse = runs+6;
        const updatedSixes = sixes+1;
        setSixes(updatedSixes);
        setRuns(updatdRunse)

    }

    return(
        <div>
            <h3>player: Bangla Batsman</h3>
            <p>six: {sixes}</p>
            <h2>Score: {runs} </h2>
            <button onClick={handlesingle}>single</button>
            <button >Four</button>
            <button onClick={hendleSix}>Six</button>
        </div>
    )
}