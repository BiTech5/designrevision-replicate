import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/shards-dashboards-logo.svg";
import { FaTable, FaUser } from "react-icons/fa";
import { MdVerticalSplit, MdNoteAdd, MdViewModule, MdError, MdEdit } from "react-icons/md";

const navItems = [
  { icon: <MdEdit />, text: "Blog Dashboard", path: "/dashboard" },
  { icon: <MdVerticalSplit />, text: "Blog Posts", path: "/posts" },
  { icon: <MdNoteAdd />, text: "Add New Post", path: "/new" },
  { icon: <MdViewModule />, text: "Forms & Components", path: "/components" },
  { icon: <FaTable />, text: "Tables", path: "/tables" },
  { icon: <FaUser />, text: "User Profile", path: "/profile" },
  { icon: <MdError />, text: "Errors", path: "/errors" }
];

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-52 flex-shrink-0">
      <nav className="h-full flex flex-col border-r shadow-lg bg-white">
        <div className="p-4 flex items-center gap-2 font-semibold">
          <img src={logo} alt="logo" className="w-6" />
          <span>Shards Dashboard</span>
        </div>
        <hr className="border-gray-200" />
        <ul className="flex-1 overflow-y-auto text-sm">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `p-4 flex items-center gap-3 transition-colors hover:bg-gray-100 w-full overflow-hidden shadow-sm ${
                    isActive ? "bg-blue-50 border-l-4 border-blue-500" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`text-xl ${isActive ? "text-blue-500" : "text-gray-400"}`}>
                      {item.icon}
                    </span>
                    <span className={`truncate ${isActive ? "text-blue-500 font-medium" : "text-gray-600"}`}>
                      {item.text}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
