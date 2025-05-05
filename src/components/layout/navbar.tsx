import { MdNotifications } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { MdVerticalSplit, MdNoteAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
    const [open, SetOpen] = useState(false);
    const dropdownmenu = [
        { icon: <FaUser />, text: "Profile", path: "/profile" },
        { icon: <MdVerticalSplit />, text: "Blog Posts", path: "/posts" },
        { icon: <MdNoteAdd />, text: "Add New Post", path: "/new" }
    ];
    return (
        <>
            <div className="w-full h-14 shadow-md flex items-center px-4 justify-between">
                <div className="flex items-center w-4/5">
                    <div className="flex items-center w-full bg-transparent px-3 py-2 rounded-md text-sm text-gray-700">
                        <svg
                            className="h-5 w-5 opacity-50 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.3-4.3" />
                            </g>
                        </svg>
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full bg-transparent outline-none placeholder-gray-500"
                            aria-label="Search"
                        />
                    </div>
                </div>

                <div className="flex items-center w-1/5 justify-between">
                    <div className="h-14 border-l border-r flex items-center">
                        <MdNotifications className="text-gray-400 text-3xl m-2" />
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={() => SetOpen(!open)}>
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                                    alt="User Avatar"
                                />
                            </div>
                        </div>
                        <span className="text-gray-400 text-sm ml-2 flex items-center">
                            Sierra Brooks
                            <FaCaretDown className="ml-1" />
                        </span>
                    </div>
                </div>
            </div>
            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
                    <ul className="py-1">
                        {
                            dropdownmenu.map(
                                (items) => (

                                    <li>
                                        <Link to={items.path} className="w-full text-left px-4 py-2 text-xs hover:bg-gray-100 flex items-center">
                                            <span className={`text-sm   text-gray-400 mr-1`}>
                                                {items.icon}
                                            </span><span className={`truncate  font-medium text-gray-600`}>
                                                {items.text}
                                            </span>

                                        </Link>
                                    </li>
                                )
                            )
                        }
                        <hr className="border-gray-200" />

                        <li>
                            <Link to={"/logout"} className="w-full text-left px-4 py-2 text-xs hover:bg-gray-100 flex items-center">
                                <TbLogout className="text-sm text-red-600 mr-1" />
                                <span className="truncate font-medium text-red-600">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>

    );
};

export default Navbar;
