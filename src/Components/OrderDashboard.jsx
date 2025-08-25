import React, { useState } from "react";

const OrderDashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: "#3103",
      time: "10:30 AM",
      customerName: "Tanishka Gade",
      items: "2x Grilled Sandwich, 1x Cold Coffee",
      amount: "Rs.200",
      status: "Preparing"
    },
    {
      id: "#3105",
      time: "10:59 AM",
      customerName: "Nafisa Ansari",
      items: "2x Cappuccino, 1x Pizza Margherita",
      amount: "Rs.350",
      status: "New"
    }
  ]);

  const handleAcceptOrder = (orderId) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, status: "Preparing" }
          : order
      )
    );
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, status: newStatus }
          : order
      )
    );
  };

  const getStatusButtonClass = (status) => {
    switch (status) {
      case "New":
        return "bg-[#FF823A] hover:bg-[#e6732e] text-white";
      case "Preparing":
        return "bg-gray-200 text-gray-700 hover:bg-gray-300";
      case "Ready":
        return "bg-green-500 hover:bg-green-600 text-white";
      case "Completed":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex-1"></div>
        <h1 className="text-2xl font-bold text-gray-800 text-center flex-1">
          OWNER NAME
        </h1>
        <div className="flex-1"></div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
        {/* Total Orders Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <h3 className="text-gray-600 font-medium text-sm mb-2">TOTAL ORDER</h3>
            <h4 className="text-gray-600 font-medium text-sm mb-4">TODAY</h4>
            <div className="text-4xl font-bold text-gray-800">24</div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <h3 className="text-gray-600 font-medium text-sm mb-2">REVENUE</h3>
            <h4 className="text-gray-600 font-medium text-sm mb-4">TODAY</h4>
            <div className="text-4xl font-bold text-gray-800">Rs.6989</div>
          </div>
        </div>
      </div>

      {/* Live Orders Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#FF823A] mb-6">Live Orders</h2>
        
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                {/* Order Info */}
                <div className="flex items-center space-x-8">
                  {/* Order ID and Time */}
                  <div className="text-left">
                    <div className="text-lg font-bold text-gray-800">{order.id}</div>
                    <div className="text-sm text-gray-600">{order.time}</div>
                  </div>

                  {/* Customer and Items */}
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-800 mb-1">
                      {order.customerName}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {order.items}
                    </div>
                    <div className="text-lg font-bold text-gray-800">
                      {order.amount}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  {order.status === "New" ? (
                    <>
                      <button className="bg-[#FF823A] hover:bg-[#e6732e] text-white px-8 py-2 rounded-lg font-medium transition-colors">
                        New
                      </button>
                      <button 
                        onClick={() => handleAcceptOrder(order.id)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
                      >
                        Accept Order
                      </button>
                    </>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <button 
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${getStatusButtonClass(order.status)}`}
                        onClick={() => {
                          const nextStatus = order.status === "Preparing" ? "Ready" : 
                                           order.status === "Ready" ? "Completed" : "Preparing";
                          handleStatusChange(order.id, nextStatus);
                        }}
                      >
                        {order.status}
                      </button>
                      {order.status === "Preparing" && (
                        <button 
                          onClick={() => handleStatusChange(order.id, "Ready")}
                          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors text-sm"
                        >
                          Mark Ready
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Order Button (Optional) */}
        <div className="mt-8 text-center">
          <button className="bg-[#FF823A] hover:bg-[#e6732e] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            + Add New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDashboard;
