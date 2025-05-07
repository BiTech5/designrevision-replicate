import { MdNotifications } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

import { useState, useRef, useEffect } from "react";
import Profile from "../ui/profile_dropdown";
import Notification from "../ui/notification_dropdown";
const Navbar = () => {
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
          <div
            className="border-r border-l px-2 flex items-center"
            ref={notificationRef}
            onClick={() => setOpenNotifications(!openNotifications)}
          >
            <MdNotifications className="text-gray-400 text-3xl cursor-pointer" />
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

          {openProfile && (
            <Profile profileDropdownRef={profileDropdownRef} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;