import { useState } from "react"

const State = () => {
    const [inputValue, setInputValue] = useState("Pedro")

    let onChange = (event: any) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    return (
        <div>
            <input className="input-group" placeholder="enter something..." onChange={onChange} />
            {inputValue}
        </div>
    )
}

export default State
