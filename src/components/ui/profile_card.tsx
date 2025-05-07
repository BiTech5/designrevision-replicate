import { MdPersonAdd } from "react-icons/md";
const ProfileCard = () => {
    return (
        <>
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
        </>
    )
}


export default ProfileCard;