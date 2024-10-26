import React, { createContext, useContext, useState } from 'react';

// Create the context
const MyContext = createContext();

export const Provider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(prevState => !prevState);
    };
  
  return (
    <MyContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error("useNavbarContext must be used within a NavbarProvider");
    }
    return context;
};
