import { useRef } from "react"
import Button from "./Button"

function ImperativeHandle() {
    const buttonRef: any = useRef(null)
    return (
        <div>
            <button
                className="btnBlue"
                onClick={() => {
                    buttonRef.current.alterToggle()
                }}
            >
                Button From Parent
            </button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default ImperativeHandle
