import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useUserContext } from "../context/UserContext";
import { useChangePrice } from "../hooks/useChangePrice";
import Swal from "sweetalert2";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, removeFromCart } = useUserContext();
  const formatCurrency = useChangePrice();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user?.cart) {
      setCartItems(user.cart);
      calculateTotal(user.cart);
    }
  }, [user?.cart]);

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

    const updatedUser = {
      ...user,
      cart: updatedItems,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    const updatedUser = {
      ...user,
      cart: [],
      orders: user.orders || [],
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setCartItems([]);
    setTotal(0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Empty Cart",
        text: "Your cart is empty",
        icon: "warning",
      });
      return;
    }

    const order = {
      id: Date.now(),
      items: cartItems,
      total: total,
      date: new Date().toISOString(),
      status: "pending",
    };

    const existingOrders = user.orders || [];
    const updatedOrders = [...existingOrders, order];

    const updatedUser = {
      ...user,
      orders: updatedOrders,
      cart: [],
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setCartItems([]);
    setTotal(0);
    setIsOpen(false);

    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been successfully placed",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center text-white hover:text-[#35FF3D] transition-colors duration-200"
      >
        <span className="text-white text-sm font-libre hover:text-[#35FF3D] cursor-pointer">
          Cart
        </span>
        {cartItems.length > 0 && (
          <span className="absolute -top-4 -right-2 bg-[#35FF3D] text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {cartItems.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Shopping Cart</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon icon="mdi:close" className="text-2xl" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-4 mb-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={`/src/assets/img/cars/${item.image}.jpg`}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-[#35FF3D] font-semibold">
                          {formatCurrency(item.price, "USD")}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <Icon icon="mdi:minus" className="text-xl" />
                          </button>
                          <span className="text-sm text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <Icon icon="mdi:plus" className="text-xl" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Icon icon="mdi:delete" className="text-xl" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total</span>
                <span className="text-xl font-bold text-[#35FF3D]">
                  {formatCurrency(total, "USD")}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full h-12 bg-[#35FF3D] hover:bg-[#2ed634] text-gray-900 font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                Proceed to Order
              </button>
              {cartItems.length > 0 && (
                <button
                  onClick={handleClearCart}
                  className="w-full mt-3 text-gray-500 hover:text-gray-700 text-sm transition-colors"
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
