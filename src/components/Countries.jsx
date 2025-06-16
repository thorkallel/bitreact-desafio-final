import React from "react";
import { Icon } from "@iconify/react";

export const Countries = () => {
  return (
    <div className="absolute bottom-[5%] left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col items-center justify-center text-white hover:bg-black/80 transition-all duration-300">
            <Icon icon="emojione:flag-for-mexico" className="text-4xl mb-2" />
            <span className="text-sm font-medium">Mexico</span>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col items-center justify-center text-white hover:bg-black/80 transition-all duration-300">
            <Icon
              icon="emojione:flag-for-united-states"
              className="text-4xl mb-2"
            />
            <span className="text-sm font-medium">United States</span>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col items-center justify-center text-white hover:bg-black/80 transition-all duration-300">
            <Icon icon="emojione:flag-for-canada" className="text-4xl mb-2" />
            <span className="text-sm font-medium">Canada</span>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col items-center justify-center text-white hover:bg-black/80 transition-all duration-300">
            <Icon icon="emojione:flag-for-spain" className="text-4xl mb-2" />
            <span className="text-sm font-medium">Spain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
