import {FilmIcon, LogoutIcon, MusicNoteIcon, DeviceMobileIcon, DuplicateIcon, InformationCircleIcon, GiftIcon} from "@heroicons/react/outline";
import Content from "./Content";

const publishingOptions = [
    {title: "Tutte le Categorie", img: <DuplicateIcon className="h-5 w-5" aria-hidden="true" />, current: true},
    {title: "Musica", img: <MusicNoteIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Elettronica", img: <DeviceMobileIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Regalo", img: <GiftIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Film", img: <FilmIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Categorie", img: <DuplicateIcon className="h-5 w-5" aria-hidden="true" />, current: true},
    {title: "Musica", img: <MusicNoteIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Elettronica", img: <DeviceMobileIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Regalo", img: <GiftIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Film", img: <FilmIcon className="h-5 w-5" aria-hidden="true" />, current: false},
];

const sidebarBottomOptions = [
    {title: "Info", img: <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />, current: true},
    {title: "Log Out", img: <LogoutIcon className="h-5 w-5" aria-hidden="true" />, current: false},
];

function Sidebar() {
    return (
        <div className="flex flex-row flex-auto ">
            <div className="py-4 px-6 lg:flex flex-auto flex-col sm:hidden xsm:hidden bg-gray-800">
                {publishingOptions.map((option) => (
                    <div key={option.title} className="relative w-full p-2 text-sm">
                        <div className="flex flex-col">
                            <div className="flex w-full justify-between rounded-lg p-2 px-4 transition cursor-pointer  ease-in-out duration bg-opacity-70 hover:bg-gray-600 bg-gray-700">
                                <p className="transition ease-in-out duration-100 hover:text-gray-200 font-medium text-yellow-400">{option.title}</p>
                                <p className="h-5 w-5 px-4">{option.img}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col flex-auto justify-end items-end">
                    {sidebarBottomOptions.map((option) => (
                        <div key={option.title} className="relative w-full p-2 text-md">
                            <div className="flex flex-col">
                                <div className="flex w-full justify-between rounded-lg p-2 px-4">
                                    <p className="transition ease-in-out duration-200 hover:text-gray-300 font-medium text-gray-200">{option.title}</p>
                                    <p className="h-5 w-5 px-4">{option.img}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Content />
        </div>
    );
}

export default Sidebar;
