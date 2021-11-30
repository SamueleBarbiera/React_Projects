import { useRef } from "react"

function Ref() {
    const inputRef: any = useRef(null)

    const onClick = () => {
        inputRef.current.value = null
    }
    return (
        <div>
            <h1>Pedro</h1>
            <input className="input-group" type="text" placeholder="Ex..." ref={inputRef} />
            <button className="btnBlue" onClick={onClick}>
                Change Name
            </button>
        </div>
    )
}

export default Ref
