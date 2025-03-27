import { createContext, useContext, useState, useEffect } from "react";

// Create User Context
const UserContext = createContext();

// Context Provider Component
export const UserProvider = ({ children }) => {
    // Load from localStorage or set default
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : { name: "" };
    });

    // Update localStorage whenever user changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom Hook to use User Context
export const useUser = () => useContext(UserContext);
