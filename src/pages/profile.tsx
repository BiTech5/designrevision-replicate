import { MdPersonAdd } from "react-icons/md";

const Profile = () => {
    return (
        <div className="p-4 sm:p-6 space-y-8 max-w-7xl mx-auto">
            <div>
                <span className="text-xs text-gray-500">Overview</span>
                <h1 className="text-2xl sm:text-3xl text-gray-600">User Profile</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="bg-white rounded-lg shadow-xl w-full lg:w-80 flex-shrink-0">
                    <div className="flex justify-center mt-4">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
                            <img
                                src="https://thispersondoesnotexist.com/"
                                alt="Profile Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="px-6 py-4 text-center flex flex-col items-center">
                        <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold">Sierra Brooks</h2>
                        <p className="text-sm text-gray-500 mb-4">Project Manager</p>
                        <div className="flex justify-center w-full">
                            <button
                                className="text-sm text-blue-600 border border-blue-600 rounded-3xl px-4 py-2 flex items-center gap-2 hover:text-white hover:bg-blue-600 transition duration-200"
                                aria-label="Follow Sierra Brooks"
                            >
                                <MdPersonAdd />
                                Follow
                            </button>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    <div className="px-6 py-4">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-gray-400">Workload</span>
                            <span className="font-medium text-blue-600 text-xs">74%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '74%' }}></div>
                        </div>
                    </div>

                    <hr className="border-gray-300" />

                    <div className="px-6 py-4">
                        <p className="text-sm text-gray-500">Description</p>
                        <p className="text-sm text-gray-700 mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 w-full">
                    <h2 className="text-lg sm:text-xl text-gray-600 mb-4">Account Details</h2>
                    <hr />

                    <form className="space-y-4 mt-4">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    defaultValue="Sierra"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    defaultValue="Brooks"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    defaultValue="sierra.brooks@example.com"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="1234 Main St"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                    State
                                </label>
                                <select
                                    id="state"
                                    name="state"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                >
                                    <option>Choose..</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="w-full sm:w-24">
                                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                                    Zip
                                </label>
                                <input
                                    type="text"
                                    id="zip"
                                    name="zip"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-gray-600 text-sm"
                                rows={4}
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md w-full sm:w-auto"
                            >
                                Update Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
