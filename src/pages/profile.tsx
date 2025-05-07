import Form from "../components/forms/form";
import ProfileCard from "../components/ui/profile_card";
const Profile = () => {
    return (
        <div className="p-4 sm:p-6 space-y-8 max-w-7xl mx-auto">
            <div>
                <span className="text-xs text-gray-500">Overview</span>
                <h1 className="text-2xl sm:text-3xl text-gray-600">User Profile</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                <ProfileCard />

            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 w-full">
                <h2 className="text-lg sm:text-xl text-gray-600 mb-4">Account Details</h2>
                <hr />
                <Form />
            </div>
        </div>
        </div>
    );
};

export default Profile;
