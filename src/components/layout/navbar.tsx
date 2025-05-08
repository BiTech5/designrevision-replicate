import { MdNotifications } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import Profile from "../ui/profile_dropdown";
import Notification from "../ui/notification_dropdown";
import ToggleProps from "../../models/ToogleProps";
const Navbar:React.FC<ToggleProps> = ({sidebarToggle,setToggle}) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const notificationDropdownRef = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setOpenProfile(false);
      }
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target as Node) &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setOpenNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="w-full h-14 shadow-md flex items-center px-4 justify-between relative bg-white z-30">
        <div className="hidden lg:flex items-center w-full md:w-4/5">
          <div className="flex items-center w-full bg-transparent px-3 py-2 rounded-md text-sm text-gray-700">
            <svg className="h-5 w-5 opacity-50 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </g>
            </svg>
            <input type="search" placeholder="Search" className="w-full bg-transparent outline-none placeholder-gray-500 text-sm" aria-label="Search"
            />
          </div>
        </div>

        <div className="hidden lg:flex md:hidden items-center justify-end space-x-3 w-auto md:w-1/5 ml-2">
          <div
            className="border-l px-2 flex items-center relative"
            ref={notificationRef}
            onClick={() => setOpenNotifications(!openNotifications)}
          >
            <div className="relative">
              <MdNotifications className="text-gray-400 text-2xl sm:text-3xl cursor-pointer" />
              <span className="absolute bottom-0 right-0 bg-red-500 text-white text-[10px] sm:text-xs rounded-full px-1">
                2
              </span>
            </div>
          </div>

          {openNotifications && (
            <Notification notificationDropdownRef={notificationDropdownRef} />
          )}

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setOpenProfile(!openProfile)}
            ref={avatarRef}
          >
            <div className="avatar">
              <div className="w-8 sm:w-10 rounded-full">
                <img
                  src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                  alt="User Avatar"
                />
              </div>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2 flex items-center">
              Sierra Brooks
              <FaCaretDown className="ml-1" />
            </span>
          </div>

          {openProfile && <Profile profileDropdownRef={profileDropdownRef} />}
        </div>
        <button className="lg:hidden md:block" aria-label="Toggle Menu" onClick={()=>setToggle(!sidebarToggle)}>
          <IoReorderThreeOutline className="text-2xl text-gray-400" />
        </button>
      </div>

    </>
  );
};

export default Navbar;