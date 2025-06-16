import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Icon } from "@iconify/react";
import { useChangePrice } from "../hooks/useChangePrice";
import Swal from "sweetalert2";

export const UserCart = () => {
  const { user } = useUserContext();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const formatCurrency = useChangePrice();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setCartItems(parsedUser.cart || []);
        calculateTotal(parsedUser.cart || []);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [user]);

  const calculateTotal = (items) => {
    const sum = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(sum);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const updatedUser = {
          ...parsedUser,
          cart: updatedItems,
        };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    }
  };

  const handleRemoveItem = (itemId) => {
    Swal.fire({
      title: "Remove Item",
      text: "Are you sure you want to remove this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#35FF3D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            const updatedItems = parsedUser.cart.filter(
              (item) => item.id !== itemId
            );

            const updatedUser = {
              ...parsedUser,
              cart: updatedItems,
            };

            localStorage.setItem("user", JSON.stringify(updatedUser));
            setCartItems(updatedItems);
            calculateTotal(updatedItems);

            Swal.fire(
              "Removed!",
              "Item has been removed from your cart.",
              "success"
            );
          } catch (error) {
            console.error("Error updating cart:", error);
            Swal.fire("Error!", "Failed to remove item.", "error");
          }
        }
      }
    });
  };

  const handleClearCart = () => {
    Swal.fire({
      title: "Clear Cart",
      text: "Are you sure you want to remove all items from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#35FF3D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            const updatedUser = {
              ...parsedUser,
              cart: [],
            };

            localStorage.setItem("user", JSON.stringify(updatedUser));
            setCartItems([]);
            setTotal(0);

            Swal.fire("Cleared!", "Your cart has been cleared.", "success");
          } catch (error) {
            console.error("Error clearing cart:", error);
            Swal.fire("Error!", "Failed to clear cart.", "error");
          }
        }
      }
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Cart</h2>
        <p className="text-center text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Cart</h2>
        <button
          onClick={handleClearCart}
          className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-2"
        >
          <Icon icon="mdi:delete" className="text-xl" />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <img
              src={`/src/assets/img/cars/${item.image}.jpg`}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium text-lg">{item.name}</h3>
              <p className="text-[#35FF3D] font-semibold">
                {formatCurrency(item.price, "USD")}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Icon icon="mdi:minus" className="text-xl" />
                  </button>
                  <span className="text-gray-900">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Icon icon="mdi:plus" className="text-xl" />
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Icon icon="mdi:delete" className="text-xl" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-[#35FF3D]">
                {formatCurrency(item.price * item.quantity, "USD")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex justify-between items-center">
          <span className="text-xl text-gray-600">Total</span>
          <span className="text-2xl font-bold text-[#35FF3D]">
            {formatCurrency(total, "USD")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
