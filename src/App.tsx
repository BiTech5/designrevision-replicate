import Sidebar from "./components/layout/sidebar"
import Navbar from "./components/layout/navbar"
import Table from "./pages/table"
import Footer from "./components/layout/footer"
import { Routes, Route } from "react-router-dom"
import Blog from "./pages/blog_posts"
import NotFound from "./components/Error/404"
function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-52 flex flex-col">
        <Navbar />
        <div className="p-4 flex-1  bg-gray-100">
          <Routes>
            <Route path="/posts" element={<Blog />} />
            <Route path="/tables" element={<Table />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App