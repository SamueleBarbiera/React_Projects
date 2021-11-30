import { useState, createContext } from "react"

export const AppContext = createContext(null)

function Context() {
    const [username, setUsername] = useState("")

    return (
        <div>
            <input
                className="input-group"
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
            <h1>User: {username}</h1>
        </div>
    )
}

export default Context
