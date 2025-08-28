import React from 'react'

const PersonalInfo = () => {
  return (
   
    <div className="w-full h-[100vh] p-20 flex items-center bg-gray-50">
      {/* Left Sidebar */}
      <div className="leftSide w-1/3 h-[90vh] bg-white rounded-2xl shadow-lg p-8 mr-8">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Menu */}
          <div className="w-full space-y-4">
            <button className="w-full py-4 px-6 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              Personal Information
            </button>
            
            <button className="w-full py-4 px-6 text-left rounded-lg bg-[#FF823A] text-white font-medium shadow-md">
              Employee Management
            </button>
            
            <button className="w-full py-4 px-6 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              Opening Hours
            </button>
            
            <button className="w-full py-4 px-6 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              Login & Password
            </button>
          </div>
        </div>
      </div>

      {/* Right Content Area (plain/empty) */}
      <div className="rightSide w-2/3 h-[90vh] bg-white rounded-2xl shadow-lg p-10">
        <div className="h-full flex items-center justify-center text-gray-400">
          <p>Edit content will appear here...</p>
        </div>
      </div>
    </div>
  );
};


export default PersonalInfo