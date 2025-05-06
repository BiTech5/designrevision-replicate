
const Table = () => {
  const users = [
    {
      id: 1,
      firstName: "Ali",
      lastName: "Kerry",
      country: "Russian Federation",
      city: "Gdańsk",
      phone: "107-0339"
    },
    {
      id: 2,
      firstName: "Clark",
      lastName: "Angela",
      country: "Estonia",
      city: "Borghetto di Vara",
      phone: "1-660-850-1647"
    },
    {
      id: 3,
      firstName: "Jerry",
      lastName: "Nathan",
      country: "Cyprus",
      city: "Braunau am Inn",
      phone: "214-4225"
    },
    {
      id: 4,
      firstName: "Colt",
      lastName: "Angela",
      country: "Liberia",
      city: "Bad Hersfeld",
      phone: "1-848-473-7416"
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <span className="text-xs text-gray-500">Overview</span>
        <h1 className="text-3xl text-gray-600">Data Tables</h1>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-medium text-blue-800">Active Users</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">#</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">First Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Last Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Country</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">City</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Phone</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.firstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.country}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-base-content rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-medium text-white">Inactive Users</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-base-content border-b border-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">#</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">First Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Last Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Country</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">City</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-300">Phone</th>
              </tr>
            </thead>
            <tbody className="bg-base-content">
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.firstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.country}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;