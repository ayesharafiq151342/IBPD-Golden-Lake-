"use client";
import { createContext, useContext, ReactNode } from "react";

// Define Context Type
interface ERPContextType {
  title: string;
  description: string;
}

// Create Context with Default Values
const ERPContext = createContext<ERPContextType>({
  title: "Default Title",
  description: "Default Description",
});

// Create Provider Component
export const ERPProvider = ({ children, value }: { children: ReactNode; value: ERPContextType }) => {
  return <ERPContext.Provider value={value}>{children}</ERPContext.Provider>;
};

// Custom Hook to use the Context
export const useERP = () => useContext(ERPContext);
