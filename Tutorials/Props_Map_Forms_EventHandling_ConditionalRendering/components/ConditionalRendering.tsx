import { useState } from "react"

const ConditionalRendering = () => {
    const [name, setName] = useState<string>("Gabriel Rufino")
    const [age, setAge] = useState<number>(21)
    const [isProgrammer, setIsProgrammer] = useState<string>("true")

    return (
        <div className="row">
            <h2>Conditional Rendering</h2>
            <div className="col-6">
                <ul>
                    <li>Name: {name}</li>
                    <li>Age: {age}</li>
                    <li>Programmer: {isProgrammer ? "Yes" : "No"}</li>
                </ul>
            </div>
            <div className="col-6">
                <button className="btn" onClick={() => setIsProgrammer("true")}>
                    prova 1°
                </button>
                <button className="btn" onClick={() => setIsProgrammer("false")}>
                    prova 2°
                </button>
                <h1>{isProgrammer}</h1>
            </div>
        </div>
    )
}

export default ConditionalRendering
