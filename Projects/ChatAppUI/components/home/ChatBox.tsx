function Chat() {
    return (
        <div className="flex-auto flex-row bg-indigo-100 shadow-md lg:w-165 md:w-screen sm:w-screen xsm:w-screen">
            <div className="flex flex-col items-center bg-gray-50 justify-center shadow-md h-16">
                <h1 className="flex flex-row text-3xl text-indigo-500">Chat</h1>
            </div>
            <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img
                    className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                    src="../../public/3.png"
                    alt=""
                    width="384"
                    height="512"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <div className="text-cyan-600">Sarah Dayan</div>
                    <p className="text-lg font-semibold">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any
                        design, and the build size is tiny.”
                    </p>
                </div>
            </div>
            <div className="flex flex-col m-4">
                <input
                    id="chat"
                    name="chat"
                    type="text"
                    className="rounded transition shadow-md duration-300 ease-in-out border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Type something"
                />
            </div>
        </div>
    )
}

export default Chat
