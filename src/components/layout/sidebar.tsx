import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/shards-dashboards-logo.svg";
import { FaTable, FaUser, FaArrowLeft } from "react-icons/fa";
import { MdVerticalSplit, MdNoteAdd, MdViewModule, MdError, MdEdit } from "react-icons/md";
import ThemeSwitch from "../theme/theeswitcher";
import useTheme from "../theme/usetheme";
const navItems = [
  { icon: <MdEdit />, text: "Blog Dashboard", path: "/dashboard" },
  { icon: <MdVerticalSplit />, text: "Blog Posts", path: "/" },
  { icon: <MdNoteAdd />, text: "Add New Post", path: "/new" },
  { icon: <MdViewModule />, text: "Forms & Components", path: "/components" },
  { icon: <FaTable />, text: "Tables", path: "/tables" },
  { icon: <FaUser />, text: "User Profile", path: "/profile" },
  { icon: <MdError />, text: "Errors", path: "/errors" }
];
import ToggleProps from "../../models/ToogleProps";
const Sidebar: React.FC<ToggleProps> = ({ sidebarToggle, setToggle }) => {
  const { selectedColor } = useTheme();
  return (
    <aside
      className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out
    ${sidebarToggle ? "translate-x-0 block w-full" : "-translate-x-full"}
    lg:translate-x-0 lg:block lg:w-52`}
    >


      <nav className="h-full flex flex-col border-r shadow-lg bg-white">
        <div className="p-4 flex items-center gap-2 font-semibold">
          <img src={logo} alt="logo" className="w-6" />
          <span>Shards Dashboard</span>
          <button className="ml-auto block lg:hidden" onClick={() => setToggle(!sidebarToggle)}>
            <FaArrowLeft />
          </button>

        </div>
        <hr className="border-gray-200" />
        <ul className="flex-1 overflow-y-auto text-sm">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `p-4 flex items-center gap-3 transition-colors hover:bg-gray-10 w-full overflow-hidden shadow-sm ${isActive ? `bg-blue-50 border-l-4 border-${selectedColor}` : ""
                  }`
                }
                onClick={() => setToggle(!sidebarToggle)}
              >
                {({ isActive }) => (
                  <>
                    <span className={`text-xl ${isActive ? `text-${selectedColor}` : "text-gray-400"}`}>
                      {item.icon}
                    </span>
                    <span className={`truncate ${isActive ? `text-${selectedColor} font-medium` : "text-gray-600"}`}>
                      {item.text}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer mb-20 ml-8 ">
          <ThemeSwitch />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
