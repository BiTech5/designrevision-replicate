import { MdVerticalSplit, MdNoteAdd } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import ProfileProps from "../../models/profile";
import { Link } from "react-router-dom";
const Profile: React.FC<ProfileProps> = ({ profileDropdownRef }) => {
    const profileDropdownMenu = [
        { icon: <FaUser />, text: "Profile", path: "/profile" },
        { icon: <MdVerticalSplit />, text: "Blog Posts", path: "/posts" },
        { icon: <MdNoteAdd />, text: "Add New Post", path: "/new" },
      ];
    return (
        <>
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
            </div></>
    )
}
export default Profile;