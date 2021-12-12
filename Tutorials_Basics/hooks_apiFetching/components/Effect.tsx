import { useEffect, useState } from "react"
import axios from "axios"

function Effect() {
    const [data, setData] = useState<any[]>([])
    const [count,setCount] = useState(0)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            console.log(response.data)
            setData(response.data)
            console.log("API WAS CALLED FROM USEFFECT")
        })
    }, [])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count+1)}}></button>
        </div>
    )
}

export default Effect
