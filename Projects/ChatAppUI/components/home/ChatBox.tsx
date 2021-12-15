import { useEffect, useState } from "react"
import axios from "axios"
import About from "../../../../Tutorials_Basics/Router/components/About"

function Chat() {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        axios
            .get("https://random-data-api.com/api/users/random_user?size=2")
            .then((response) => {
                console.log(response.data)
                setData(response.data)
                console.log("API WAS CALLED FROM Chatbox")
            })
    }, [])
    return (
        <div className="flex flex-auto w-screen flex-row shadow-sm">
            <div className="flex flex-auto flex-col bg-indigo-300">
                <div className="flex flex-col items-center bg-white justify-center h-14 p-3.5">
                    <h1 className="flex justify-center items-center text-center text-3xl text-indigo-500">
                        Chat
                    </h1>
                </div>
                <div className="flex flex-auto flex-col container" id="demo1">
                    <div className="flex flex-row h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                        <div className="flex flex-col">
                            {data.slice(0, 1).map((data) => (
                                <div key={data.id}>
                                    <div className="whitespace-nowrap">
                                        <div className="flex border rounded-full border-indigo-700 items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={data.avatar}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col pl-2">
                            <div className="text-left">
                                {data.slice(0, 1).map((data) => (
                                    <div key={data.id}>
                                        <p className="text-cyan-600">
                                            {data.first_name}
                                        </p>
                                        <p className="text-sm">Ciao!</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    <div className="text-sm text-right text-gray-600 pl-4">4 ore fa</div>
                    </div>
                    <div className="flex flex-row h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                        <div className="flex flex-col">
                            {data.slice(0, 1).map((data) => (
                                <div key={data.id}>
                                    <div className="whitespace-nowrap">
                                        <div className="flex border rounded-full border-indigo-700 items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={data.avatar}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col pl-2">
                            <div className="text-left">
                                {data.slice(0, 1).map((data) => (
                                    <div key={data.id}>
                                        <p className="text-cyan-600">
                                            {data.first_name}
                                        </p>
                                        <p className="text-sm">
                                            Oi ci sei? volevo parlarti della
                                            festa che farò sabato, mi sai dire
                                            se ci sarà pure Clarissa?
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    <div className="text-sm text-gray-600 pl-4">3 ore fa</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="flex h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                            <div className="flex flex-col">
                                {data.slice(1, 2).map((data) => (
                                    <div key={data.id}>
                                        <div className="whitespace-nowrap">
                                            <div className="flex border rounded-full border-indigo-700 items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={data.avatar}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col pl-2">
                                <div className="text-left">
                                    {data.slice(1, 2).map((data) => (
                                        <div key={data.id}>
                                            <p className="text-cyan-600">
                                                {data.first_name}
                                            </p>
                                            <p className="text-sm break-all">
                                                Scusa se ho letto solo ora..
                                                comunque si, penso che ci sarà
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    <div className="text-sm text-right text-gray-600 pl-4">3 ore fa</div>
                        </div>
                    </div>
                    <div className="flex flex-row h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                        <div className="flex flex-col">
                            {data.slice(0, 1).map((data) => (
                                <div key={data.id}>
                                    <div className="whitespace-nowrap">
                                        <div className="flex border rounded-full border-indigo-700 items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={data.avatar}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col pl-2">
                            <div className="text-left">
                                {data.slice(0, 1).map((data) => (
                                    <div key={data.id}>
                                        <p className="text-cyan-600">
                                            {data.first_name}
                                        </p>
                                        <p className="text-sm">Ciao!</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    <div className="text-sm text-right text-gray-600 pl-4">4 ore fa</div>
                    </div>
                    <div className="flex flex-row h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                        <div className="flex flex-col">
                            {data.slice(0, 1).map((data) => (
                                <div key={data.id}>
                                    <div className="whitespace-nowrap">
                                        <div className="flex border rounded-full border-indigo-700 items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={data.avatar}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col pl-2">
                            <div className="text-left">
                                {data.slice(0, 1).map((data) => (
                                    <div key={data.id}>
                                        <p className="text-cyan-600">
                                            {data.first_name}
                                        </p>
                                        <p className="text-sm">
                                            Oi ci sei? volevo parlarti della
                                            festa che farò sabato, mi sai dire
                                            se ci sarà pure Clarissa?
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    <div className="text-sm text-gray-600 pl-4">3 ore fa</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="flex h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                            <div className="flex flex-col">
                                {data.slice(1, 2).map((data) => (
                                    <div key={data.id}>
                                        <div className="whitespace-nowrap">
                                            <div className="flex border rounded-full border-indigo-700 items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={data.avatar}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col pl-2">
                                <div className="text-left">
                                    {data.slice(1, 2).map((data) => (
                                        <div key={data.id}>
                                            <p className="text-cyan-600">
                                                {data.first_name}
                                            </p>
                                            <p className="text-sm break-all">
                                                Scusa se ho letto solo ora..
                                                comunque si, penso che ci sarà
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    <div className="text-sm text-right text-gray-600 pl-4">3 ore fa</div>
                        </div>
                    </div>
                    <div className="flex flex-row h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                        <div className="flex flex-col">
                            {data.slice(0, 1).map((data) => (
                                <div key={data.id}>
                                    <div className="whitespace-nowrap">
                                        <div className="flex border rounded-full border-indigo-700 items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={data.avatar}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col pl-2">
                            <div className="text-left">
                                {data.slice(0, 1).map((data) => (
                                    <div key={data.id}>
                                        <p className="text-cyan-600">
                                            {data.first_name}
                                        </p>
                                        <p className="text-sm">Ciao!</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    <div className="text-sm text-right text-gray-600 pl-4">4 ore fa</div>
                    </div>
                    <div className="flex flex-row h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                        <div className="flex flex-col">
                            {data.slice(0, 1).map((data) => (
                                <div key={data.id}>
                                    <div className="whitespace-nowrap">
                                        <div className="flex border rounded-full border-indigo-700 items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={data.avatar}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col pl-2">
                            <div className="text-left">
                                {data.slice(0, 1).map((data) => (
                                    <div key={data.id}>
                                        <p className="text-cyan-600">
                                            {data.first_name}
                                        </p>
                                        <p className="text-sm">
                                            Oi ci sei? volevo parlarti della
                                            festa che farò sabato, mi sai dire
                                            se ci sarà pure Clarissa?
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    <div className="text-sm text-gray-600 pl-4">3 ore fa</div>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className="flex h-min w-fit justify-center items-center bg-gray-100 rounded-xl p-2 m-4">
                            <div className="flex flex-col">
                                {data.slice(1, 2).map((data) => (
                                    <div key={data.id}>
                                        <div className="whitespace-nowrap">
                                            <div className="flex border rounded-full border-indigo-700 items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={data.avatar}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col pl-2">
                                <div className="text-left">
                                    {data.slice(1, 2).map((data) => (
                                        <div key={data.id}>
                                            <p className="text-cyan-600">
                                                {data.first_name}
                                            </p>
                                            <p className="text-sm break-all">
                                                Scusa se ho letto solo ora..
                                                comunque si, penso che ci sarà
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    <div className="text-sm text-right text-gray-600 pl-4">3 ore fa</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white w-full space-y-8">
                    <input
                        id="chat"
                        name="chat"
                        type="text"
                        className="m-2 rounded-md border-2 focus"
                        placeholder="Scrivi qualcosa . . ."
                    />
                </div>
            </div>
        </div>
    )
}

export default Chat
