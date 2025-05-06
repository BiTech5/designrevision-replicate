import { MdNotifications } from "react-icons/md";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { MdVerticalSplit, MdNoteAdd } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const notificationDropdownRef = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);

  const profileDropdownMenu = [
    { icon: <FaUser />, text: "Profile", path: "/profile" },
    { icon: <MdVerticalSplit />, text: "Blog Posts", path: "/posts" },
    { icon: <MdNoteAdd />, text: "Add New Post", path: "/new" },
  ];

  const notificationMenu = [
    { text: "New comment on your post", time: "5m ago" },
    { text: "Post liked by John Doe", time: "10m ago" },
    { text: "New follower: Jane Smith", time: "1h ago" },
  ];

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
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
            <div
              ref={notificationDropdownRef}
              className="absolute top-16 right-12 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-dropdown"
            >
              <ul className="py-2 text-sm">
                {notificationMenu.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    <span className="truncate flex-1">{item.text}</span>
                    <span className="text-xs text-gray-400 ml-2">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            <div
              ref={profileDropdownRef}
              className="absolute top-16 right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-dropdown"
            >
              <ul className="py-2 text-sm">
                {profileDropdownMenu.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      <span className="text-lg text-gray-400 mr-2">{item.icon}</span>
                      <span className="truncate">{item.text}</span>
                    </Link>
                  </li>
                ))}
                <hr className="my-1 border-gray-200" />
                <li>
                  <Link
                    to="/logout"
                    className="flex items-center px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    <TbLogout className="text-lg mr-2" />
                    <span className="truncate font-medium">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;