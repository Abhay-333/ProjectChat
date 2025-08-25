import React, { useState } from "react";

const EmployeeManagement = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    role: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee data:", formData);
    // Add your submit logic here
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      role: ""
    });
  };

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

      {/* Right Content Area */}
      <div className="rightSide w-2/3 h-[90vh] bg-white rounded-2xl shadow-lg p-10">
        <div className="h-full">
          {/* Header */}
          <div className="flex items-center mb-8">
            <span className="text-2xl mr-3">▷</span>
            <h1 className="text-3xl font-semibold text-gray-800">Add New Employees</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row - First Name & Last Name */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF823A] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF823A] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Second Row - Email & Phone Number */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF823A] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF823A] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Third Row - Gender & Role */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  placeholder="Enter Gender"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF823A] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="Enter Role"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF823A] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="bg-[#FF823A] hover:bg-[#e6732e] text-white font-semibold py-4 px-12 rounded-lg text-lg transition-colors shadow-lg"
              >
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;
