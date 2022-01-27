import type {NextPage} from "next";
import Head from "next/head";
import Navbar from "../components/Home/Navbar";
//import HamburgerMenu from "../components/Home/HamburgerMenu";
import Content from "../components/Home/Content";
import Sidebar from "../components/Home/Sidebar";

const Home: NextPage = () => {
    return (
        <div className="flex overflow-hidden">
            <Head>
                <title>Home</title>
                <meta name="description" content="Amazon Home Page" />
                <link rel="icon" href="./amazon-svgrepo-com.svg" />
            </Head>
            <div className="flex flex-col bg-gray-100 overflow-hidden" id="demo1">
                <Navbar />
                <Sidebar />
            </div>
        </div>
    );
};

export default Home;
