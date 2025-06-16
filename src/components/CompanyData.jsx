import React from "react";
import { Icon } from "@iconify/react";

export const CompanyData = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-600">
        <div className="flex items-center space-x-3 mb-4">
          <Icon icon="mdi:phone" className="text-[#35FF3D] text-2xl" />
          <h3 className="text-white font-semibold">Phone</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300">+52 (55) 1234-5678</p>
          <p className="text-gray-300">+52 (55) 8765-4321</p>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-600">
        <div className="flex items-center space-x-3 mb-4">
          <Icon icon="mdi:map-marker" className="text-[#35FF3D] text-2xl" />
          <h3 className="text-white font-semibold">Address</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300">Av. Insurgentes Sur 1602</p>
          <p className="text-gray-300">Crédito Constructor, 03940</p>
          <p className="text-gray-300">Mexico City, CDMX</p>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-600">
        <div className="flex items-center space-x-3 mb-4">
          <Icon icon="mdi:email" className="text-[#35FF3D] text-2xl" />
          <h3 className="text-white font-semibold">Email</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300">sales@buephaluscars.com</p>
          <p className="text-gray-300">support@buephaluscars.com</p>
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-600">
        <div className="flex items-center space-x-3 mb-4">
          <Icon icon="mdi:clock-outline" className="text-[#35FF3D] text-2xl" />
          <h3 className="text-white font-semibold">Business Hours</h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
          <p className="text-gray-300">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
