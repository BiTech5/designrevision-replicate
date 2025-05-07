const Form = () => {
    return (
        <>
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
            </>
    )
}
export default Form;