import Sidebar from "./components/layout/sidebar"
import Navbar from "./components/layout/navbar"
function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
      </div>

    </div>
  )
}

export default App
