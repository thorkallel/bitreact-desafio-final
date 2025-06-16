import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";

export const UserData = () => {
  const { user } = useUserContext();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [user]);

  if (!userData) {
    return <div className="text-center p-4">No user data available</div>;
  }

  const displayName =
    typeof userData.name === "string"
      ? userData.name
      : userData.name?.firstname || "Not provided";
  const displayLastName =
    typeof userData.lastName === "string"
      ? userData.lastName
      : userData.name?.lastname || "Not provided";

  // Format address object into a string
  const formatAddress = (address) => {
    if (!address) return "Not provided";
    if (typeof address === "string") return address;

    const parts = [];
    if (address.street) parts.push(address.street);
    if (address.number) parts.push(address.number);
    if (address.city) parts.push(address.city);
    if (address.zipcode) parts.push(address.zipcode);

    return parts.length > 0 ? parts.join(", ") : "Not provided";
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Personal Information
      </h2>

      <div className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Account Details
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{userData.email || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium capitalize">
                {userData.role || "Not provided"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Personal Details
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{displayName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Name</p>
              <p className="font-medium">{displayLastName}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Contact Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{userData.phone || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">{formatAddress(userData.address)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
