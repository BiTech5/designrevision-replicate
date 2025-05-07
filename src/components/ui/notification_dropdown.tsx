import React from "react";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";
import NotificationProps from "../../models/notification";


const Notification: React.FC<NotificationProps> = ({ notificationDropdownRef }) => {
    return (
        <div
            ref={notificationDropdownRef}
            className="absolute top-16 right-12 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-dropdown"
        >
            <ul className="text-sm divide-y divide-gray-200">
                <li className="flex px-4 py-4">
                    <div className="bg-purple-100 text-gray-600 rounded-full p-2 mr-3 flex items-center justify-center w-10 h-10">
                        <IoAnalyticsSharp size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Analytics</p>
                        <p className="text-gray-700">
                            Your website’s active users count increased by{" "}
                            <span className="text-green-500 font-medium">28%</span> in the last week. Great job!
                        </p>
                    </div>
                </li>

                <li className="flex px-4 py-4">
                    <div className="bg-purple-100 text-gray-600 rounded-full p-2 mr-3 flex items-center justify-center w-10 h-10">
                        <FaShop size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Sales</p>
                        <p className="text-gray-700">
                            Last week your store’s sales count decreased by{" "}
                            <span className="text-red-500 font-medium">5.52%</span>. It could have been worse!
                        </p>
                    </div>
                </li>
            </ul>


            <div className="text-center border-t border-gray-200 text-sm text-gray-500 py-2 hover:bg-gray-100 cursor-pointer">
                View all Notifications
            </div>
        </div>
    );
};

export default Notification;
