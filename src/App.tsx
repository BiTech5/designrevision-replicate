import Sidebar from "./components/layout/sidebar"
import Navbar from "./components/layout/navbar"
import Table from "./pages/table"
function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-52 flex flex-col">
        <Navbar />
        <div className="p-4 flex-1  bg-gray-100">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default App