import { LockClosedIcon } from "@heroicons/react/solid"

function Container() {
    return (
        <div className="min-h-full flex items-center justify-center py-52 px-4 sm:px-4 lg:px-8">
            <div className="max-w-xs w-full space-y-8 border-white px-6 py-6 rounded-xl bg-indigo-100">
                <h2 className="mt-6 text-center text-3xl text-gray-900">
                    Sign in
                </h2>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded shadow-sm -space-y-px ">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance rounded relative block w-full px-3 py-2 border  transition duration-300 ease-in-out border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance rounded relative w-full px-3 py-2 border transition duration-300 ease-in-out border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white transition duration-300 ease-in-out bg-indigo-600 hover:bg-indigo-800 transform"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon
                                    className="h-5 w-5 transition duration-300 ease-in-out text-indigo-400 group-hover:text-indigo-200"
                                    aria-hidden="true"
                                />
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Container
