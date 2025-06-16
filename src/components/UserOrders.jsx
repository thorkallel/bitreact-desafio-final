import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Icon } from "@iconify/react";
import { useChangePrice } from "../hooks/useChangePrice";
import Swal from "sweetalert2";

export const UserOrders = () => {
  const { user } = useUserContext();
  const [orders, setOrders] = useState([]);
  const formatCurrency = useChangePrice();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setOrders(parsedUser.orders || []);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [user]);

  const handleDeleteOrder = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#35FF3D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            const updatedOrders = parsedUser.orders.filter(
              (order) => order.id !== orderId
            );

            const updatedUser = {
              ...parsedUser,
              orders: updatedOrders,
            };

            localStorage.setItem("user", JSON.stringify(updatedUser));
            setOrders(updatedOrders);

            Swal.fire("Deleted!", "Your order has been deleted.", "success");
          } catch (error) {
            console.error("Error updating orders:", error);
            Swal.fire("Error!", "Failed to delete order.", "error");
          }
        }
      }
    });
  };

  if (orders.length === 0) {
    return (
      <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
        <p className="text-center text-gray-500">No orders found</p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                <p className="text-sm text-gray-500">
                  Date: {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[#35FF3D] text-gray-900">
                  {order.status}
                </span>
                <button
                  onClick={() => handleDeleteOrder(order.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Icon icon="mdi:delete" className="text-xl" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-gray-50 p-2 rounded"
                >
                  <img
                    src={`/src/assets/img/cars/${item.image}.jpg`}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-[#35FF3D] font-semibold">
                      {formatCurrency(item.price * item.quantity, "USD")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total</span>
                <span className="text-lg font-bold text-[#35FF3D]">
                  {formatCurrency(order.total, "USD")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
