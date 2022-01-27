import {Fragment, useState, useEffect} from "react";
import {useTheme} from "next-themes";
import {Listbox, Transition} from "@headlessui/react";
import {
    CheckIcon,
    FilmIcon,
    HeartIcon,
    MusicNoteIcon,
    ShoppingCartIcon,
    BellIcon,
    SearchIcon,
    DeviceMobileIcon,
    ChevronDownIcon,
    DuplicateIcon,
    GiftIcon,
} from "@heroicons/react/outline";

const publishingOptions = [
    {title: "Tutte le categorie", img: <DuplicateIcon className="h-5 w-5" aria-hidden="true" />, current: true},
    {title: "Musica", img: <MusicNoteIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Elettronica", img: <DeviceMobileIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Idee Regalo", img: <GiftIcon className="h-5 w-5" aria-hidden="true" />, current: false},
    {title: "Film", img: <FilmIcon className="h-5 w-5" aria-hidden="true" />, current: false},
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
function Navbar() {
    const [selected, setSelected] = useState(publishingOptions[0]);
    return (
        <div className="flex flex-row h-22 w-screen p-10 py-2 px-10 bg-gray-800 ">
            <div className="flex flex-col justify-start items-start ">
                <div className="w-16 mt-4 lg:ml-8 sm:ml-4 cursor-pointer mr-8 md:w-16 sm:w-16 xsm:w-0">
                    <img className="flex flex-col w-16" src="./logos.png" />
                </div>
            </div>
            <div className="flex flex-col flex-auto justify-center items-center ">
                <div className="flex shadow-xl">
                    <Listbox value={selected} onChange={setSelected}>
                        {({open}) => (
                            <>
                                <div className="relative">
                                    <div className="flex-1 lg:inline-flex md:inline-flex sm:hidden xsm:hidden shadow-sm rounded-l-md divide-x divide-yellow-300">
                                        <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-yellow-300">
                                            <div className="relative inline-flex items-center border-0 bg-yellow-300 py-2 pl-3 pr-4 rounded-l-md shadow-sm truncate text-gray-900">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                <p className="ml-2.5 text-sm font-medium">{selected.title}</p>
                                            </div>
                                            <Listbox.Button className="h-10 relative transition ease-linear focus:bg-yellow-300 duration-200 inline-flex items-center bg-yellow-300 p-2 text-sm font-medium text-white hover:bg-yellow-400 ">
                                                <ChevronDownIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                                            </Listbox.Button>
                                        </div>
                                    </div>

                                    <Transition show={open} as={Fragment} leave="transition ease-in-out focus:bg-yellow-300 duration-300" leaveFrom="opacity-0" leaveTo="opacity-0">
                                        <Listbox.Options className="origin-top-right absolute z-10 right-0 mt-2 w-full rounded-md  overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {publishingOptions.map((option) => (
                                                <Listbox.Option
                                                    key={option.title}
                                                    className={({active}) =>
                                                        classNames(
                                                            active ? "text-gray-900 bg-yellow-300" : "text-gray-900",
                                                            "transition ease-in-out duration-200 focus:bg-yellow-300 cursor-default select-none relative w-full p-4 text-sm"
                                                        )
                                                    }
                                                    value={option}
                                                >
                                                    {({selected, active}) => (
                                                        <div className="flex flex-col">
                                                            <div className="flex justify-between">
                                                                <p className={selected ? "font-semibold" : "font-normal"}>{option.title}</p>
                                                                <p className={selected ? "font-semibold" : "font-normal"}>{option.img}</p>
                                                                {selected ? (
                                                                    <span className={active ? "text-gray-900" : "text-gray-900"}>
                                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </span>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                    <div className="flex">
                        <input type="text" name="text" id="text" className="flex flex-shrink  lg:rounded-none md:rounded-none text-gray-900 xsm:rounded-l-lg h-10 sm:text-sm break-words truncate border-white focus:outline-none outline-none bg-white" />
                    </div>
                    <button
                        type="submit"
                        className="mt-3 w-10 h-10 inline-flex items-center justify-center px-2 shadow-sm font-medium rounded-r-md transition ease-in-out duration-200 text-gray-900 bg-yellow-300 hover:bg-yellow-400 sm:mt-0 xsm:mt-0   sm:text-sm"
                    >
                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </div>
            <div className="lg:flex flex-col mr-10 flex-shrink-0 justify-end items-end md:hidden sm:hidden xsm:hidden">
                <div className=" flex flex-row flex-auto justify-end items-end">
                    <button className="flex">
                        <ShoppingCartIcon className="shadow-2xl h-10 w-10 ml-2 mr-2  rounded-md p-2 transition ease-in-out duration-300 hover:bg-gray-900" aria-hidden="true" />
                    </button>
                    <button className="flex">
                        <BellIcon className="shadow-2xl h-10 w-10 ml-2 mr-2  rounded-md p-2 transition ease-in-out duration-300 hover:bg-gray-900" aria-hidden="true" />
                    </button>
                    <button className="flex">
                        <HeartIcon className="shadow-2xl h-10 w-10 ml-2 mr-2  rounded-md p-2 transition ease-in-out duration-300 hover:bg-gray-900" aria-hidden="true" />
                    </button>
                    <button className="flex">
                        <img className="shadow-2xl ml-2 h-10 w-10 rounded-full contrast-125 transition ease-in-out duration-200 hover:drop-shadow-lg" src="./user.jpeg" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
