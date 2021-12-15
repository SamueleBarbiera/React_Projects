import Head from "next/head"
import Sidebar from "../components/home/Leftbar"
import ChatBox from "../components/home/ChatBox"
import Leftbar from "../components/home/Rightbar"

function Home() {
    return (
        <div className="flex h-screen justify-center items-center overflow-hidden bg-indigo-100">
            <div className="flex overflow-hidden m-20 xsm:m-8 rounded-xl shadow-4xl">
                <Head>
                    <title>Home</title>
                    <meta
                        name="description"
                        content="Home"
                    />
                    <link rel="icon" href="./home.svg" />
                </Head>
                <div className="flex h-144 overflow-hidden">
                    <Sidebar />
                    <ChatBox />
                    <Leftbar />
                </div>
            </div>
        </div>
    )
}

export default Home
