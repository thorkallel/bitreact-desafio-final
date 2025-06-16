/*
    1. Crear el contexto    
    2. Crear el provider
    3. Crear el hook
*/

import { createContext, useContext, useState, useEffect } from "react";
import { getusers } from "../services/apis/usersService";

import Swal from "sweetalert2";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  console.log("User Provider", user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getusers();
        setUsers(fetchedUsers || []);
        if (fetchedUsers && fetchedUsers.length > 0) {
          setUser(fetchedUsers[0]);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    console.log("user", user);
    if (user) {
      const userWithCart = { ...user, cart: [] };
      localStorage.setItem("user", JSON.stringify(userWithCart));
      setUser(userWithCart);
      Swal.fire({
        title: "Login exitoso",
        text: "Bienvenido " + user.username,
        icon: "success",
      });
      return true;
    } else {
      Swal.fire({
        title: "Login fallido",
        text: "Usuario o contraseña incorrectos",
        icon: "error",
      });
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    return false;
  };

  const addToCart = (item) => {
    if (user) {
      const updatedUser = {
        ...user,
        cart: [...(user.cart || []), item],
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      return true;
    }
    return false;
  };

  const removeFromCart = (itemId) => {
    if (user) {
      const updatedUser = {
        ...user,
        cart: user.cart.filter((item) => item.id !== itemId),
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, logout, addToCart, removeFromCart }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
