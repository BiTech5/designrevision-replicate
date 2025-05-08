import Sidebar from "./components/layout/sidebar"
import Navbar from "./components/layout/navbar"
import Table from "./pages/table"
import Footer from "./components/layout/footer"
import { Routes, Route } from "react-router-dom"
import Blog from "./pages/blog_posts"
import Profile from "./pages/profile"
import NotFound from "./components/Error/404"
import NewPost from "./pages/new_post"
import { ThemeProvider } from "./components/theme/ThemeProvider"
import { useState } from "react"
function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <ThemeProvider>

      <div className="flex min-h-screen bg-gray-50">
        <Sidebar sidebarToggle={sidebarToggle} setToggle={setSidebarToggle} />
        <div className="flex-1 ml-0 lg:ml-52 flex flex-col">
          <Navbar sidebarToggle={sidebarToggle} setToggle={setSidebarToggle} />
          <div className="p-4 flex-1  bg-gray-100">
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/tables" element={<Table />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/new" element={<NewPost />} />

            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App