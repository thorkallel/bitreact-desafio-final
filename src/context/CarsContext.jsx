/*
    1. Crear el contexto    
    2. Crear el provider
    3. Crear el hook
*/

import { createContext, useContext, useState, useEffect } from "react";
import { cars as mockCars } from "../utils/mockCars";

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(mockCars);
  }, []);

  return (
    <CarsContext.Provider value={{ cars, setCars }}>
      {children}
    </CarsContext.Provider>
  );
};

export const useCarsContext = () => {
  return useContext(CarsContext);
};
