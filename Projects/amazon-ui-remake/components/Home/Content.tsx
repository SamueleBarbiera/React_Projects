import {FilmIcon, DeviceMobileIcon, DuplicateIcon, HeartIcon, GiftIcon} from "@heroicons/react/outline";
import {useState, useEffect, SetStateAction} from "react";
import axios from "axios";
const publishingOptions = [
    {title: "Elettronica", img: <DeviceMobileIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "Idee Regalo", img: <GiftIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "Film", img: <FilmIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "Tutte le categorie", img: <DuplicateIcon className="h-8 w-8" aria-hidden="true" />, current: true},
    {title: "Elettronica", img: <DeviceMobileIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "Idee Regalo", img: <GiftIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "Film", img: <FilmIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "categorie", img: <DuplicateIcon className="h-8 w-8" aria-hidden="true" />, current: true},
    {title: "Elettronica", img: <DeviceMobileIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "Idee Regalo", img: <GiftIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "Film", img: <FilmIcon className="h-8 w-8" aria-hidden="true" />, current: false},
    {title: "Tutte le categorie", img: <DuplicateIcon className="h-8 w-8" aria-hidden="true" />, current: true},
];

function Content() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/electronics").then((response: {data: SetStateAction<any[]>}) => {
            console.log(response.data);
            setData(response.data);
        });
    }, []);

    return (
        <div className="flex flex-col py-6 px-6 ">
            <div className="flex flex-row flex-auto">
                <div className="flex flex-col bg-opacity-80 bg-yellow-300 w-full h-min shadow-xl sm:rounded-xl p-6">
                    <p className="font-medium lg:text-4xl md:text-3xl sm:text-3xl xsm:text-3xl lg:leading-[3rem] md:leading-[2.6rem] sm:leading-[2.6rem] xsm:leading-[2.6rem] text-gray-700">
                        Con prime i 📦 arrivano anche il fine settimana, con una spedizione 🚀
                    </p>
                    <div className="mt-6 sm:flex sm:items-start sm:justify-between">
                        <div className="max-w-2xl text-md text-gray-700">
                            <p>Oltre alla spedizione veloce puoi usufruire dei servizi di Prime Video, Prime Music, Prime Reading e tanti altri</p>
                        </div>
                    </div>
                    <div className="mt-4 sm:flex-shrink-0 sm:flex sm:items-center">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md  text-white bg-gray-700 transition ease-in-out duration-300 hover:bg-gray-800 sm:text-sm"
                        >
                            Scopri tutte le offerte
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-2">
                <p className="p-6 text-2xl text-gray-800">Popular categories 💣</p>
                <div className="flex flex-1 flex-row flex-wrap justify-center">
                    {publishingOptions.map((option) => (
                        <div key={option.title} className="w-min p-3">
                            <div className="rounded-xl p-6 transition cursor-pointer shadow-lg ease-in-out duration-200 hover:bg-gray-50 bg-white">
                                <p className="w-min h-min invert">{option.img}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-2">
                <p className="p-6 text-2xl text-gray-800">Hot Deals 🔥</p>
                <div className="lg:flex md:flex smd:flex flex-1 flex-row flex-wrap lg:justify-start xsm:justify-center items-center pl-3">
                    {data.map((data) => (
                        <div key={data.id}>
                            <div className="lg:flex flex-col p-4 ">
                                <div className="flex shadow-lg justify-center items-center h-full lg:w-50 xsm:w-full rounded-xl p-6 transition cursor-pointer ease-in-out duration hover:bg-gray-50 bg-white">
                                    <img className="lg:flex flex-row lg:h-36 xsm:h-40  p-4 justify-center items-center" src={data.image} alt="" />
                                </div>
                                <div className="flex flex-col pt-4">
                                    <p className="flex flex-row justify-center items-center text-md p-1 font-medium w-full text-gray-900">
                                        {data.title.substring(0, 20).substring(0, data.title.substring(0, 20).lastIndexOf(" "))}
                                    </p>
                                    <div className="flex flex-row justify-between pl-2 pr-2 pt-1">
                                        <p className="flex text-xl justify-start text-gray-900 font-normal">{data.price} 💶</p>
                                        <p className="flex text-lg justify-end text-yellow-400 font-medium">{data.rating.rate}/5 ⭐</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;
