import { useEffect, useState } from "react"
import axios from "axios"

function Sidebar() {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        axios
            .get("https://random-data-api.com/api/users/random_user?size=10")
            .then((response) => {
                console.log(response.data)
                setData(response.data)
                console.log("API WAS CALLED FROM LeftBar")
            })
    }, [])

    return (
        <div className="flex flex-row bg-white lg:w-min md:w-min sm:w-min xsm:w-0">
            <div className="flex flex-col bg-white">
                <div className="flex items-center justify-center h-14 p-3">
                    <h1 className="text-3xl text-indigo-500">Contatti</h1>
                </div>
                <main className="container lg:w-min md:w-min sm:w-min xsm:w-0" id="demo1">
                    <div className="min-w-full divide-y divide-gray-200">
                        <div className="bg-white divide-y divide-gray-200">
                            {data.map((data) => (
                                <div key={data.id}>
                                    <div className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={data.avatar}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {data.first_name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Sidebar
