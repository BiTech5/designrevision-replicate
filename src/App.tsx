import Sidebar from "./components/layout/sidebar"
import Navbar from "./components/layout/navbar"
import Blog from "./pages/blog_posts"

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-52 flex flex-col">
        <Navbar />
        <div className="p-4 flex-1  bg-gray-100">
          <Blog />
        </div>
      </div>
    </div>
  )
}

export default App