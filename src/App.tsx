import Sidebar from "./components/layout/sidebar"
import Navbar from "./components/layout/navbar"
import Blog from "./pages/blog_posts"
function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="">
          <Blog/>
        </div>
      </div>

    </div>
  )
}

export default App
