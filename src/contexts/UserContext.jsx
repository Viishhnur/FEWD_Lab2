import React from 'react';
const userData = {
    name: "John Doe",
    email: "john@gmail.com",
    age: 30,
}

// Create a context for user data
export const UserContext = React.createContext();

// Create a provider component
export const UserContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};