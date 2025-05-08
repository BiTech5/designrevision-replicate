import { SetStateAction, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaRegStar, FaThumbsUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useTheme from "./usetheme";
const ThemeSwitch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedColor, setSelectedColor } = useTheme();

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const selectColor = (color: SetStateAction<string>) => {
        setSelectedColor(color as string);
    };

    return (
        <div className="relative">
            <button
                className={`absolute btn bg-${selectedColor} text-white rounded-full text-2xl p-0 w-12 h-12 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 active:scale-90  bottom-1 left-1`}
                onClick={togglePanel}
            >
                <IoMdSettings />
            </button>

            {isOpen && (
                <div className="absolute bottom-0 left-0 bg-gray-900 w-56 p-4 rounded-lg shadow-lg z-10">
                    <div className="float-right">
                        <button
                            className="text-gray-400 hover:text-white text-2xl"
                            onClick={togglePanel}
                        >
                            ×
                        </button>
                    </div>
                    <br />
                    <div className="flex justify-center items-center ">
                        <p className="text-gray-400 text-xs font-semibold ">ACCENT COLOR</p>
                    </div>
                    <br />
                    <div className="flex justify-between mb-4 ">
                        <button className="bg-blue-600 rounded-full h-4 w-4 hover:scale-125" onClick={() => selectColor("blue-600")}></button>
                        <button className="bg-gray-700 rounded-full h-4 w-4 hover:scale-125" onClick={() => selectColor("gray-700")}></button>
                        <button className="bg-green-600 rounded-full h-4 w-4 hover:scale-125" onClick={() => selectColor("green-600")}></button>
                        <button className="bg-blue-400 rounded-full h-4 w-4 hover:scale-125" onClick={() => selectColor("blue-400")}></button>
                        <button className="bg-yellow-500 rounded-full h-4 w-4 hover:scale-125" onClick={() => selectColor("yellow-500")}></button>
                        <button className="bg-red-600 rounded-full h-4 w-4 hover:scale-125" onClick={() => selectColor("red-600")}></button>
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <button className="bg-blue-600 text-white w-full py-2 rounded flex items-center justify-center gap-2">
                            <FaCloud /> Download
                        </button>
                        <button className="bg-white text-gray-700 w-full py-2 rounded flex items-center justify-center gap-2">
                            <IoDocumentText /> Documentation
                        </button>
                    </div>

                    <div className="border-t border-gray-700 pt-3">
                        <p className="text-gray-400 text-xs font-semibold mb-2 text-center">HELP US GROW</p>
                        <div className="flex justify-center">
                            <button className="flex items-center font-bold  bg-gray-200  hover:bg-white text-black border text-xs "><FaRegStar />Star</button>
                            <button className="bg-white text-black border text-xs  hover:text-blue-800 hover:font-bold">1,214</button>
                        </div>
                        <div className="flex justify-center gap-4 mt-3">
                            <button className="text-white flex justify-center items-center bg-blue-600 text-xs p-1 rounded-md"><FaThumbsUp /> Like 174</button>
                            <button className="text-white flex justify-center items-center bg-black text-sm p-1 rounded-xl hover:text-gray-400"> <FaXTwitter /> Post</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThemeSwitch;