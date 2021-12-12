import { useEffect } from "react"

function Child({ returnComment }: { returnComment: any }) {
    useEffect(() => {
        console.log("FUNCTION WAS CALLED")
    }, [returnComment])

    return <div>{returnComment("Pedro")}</div>
}

export default Child
