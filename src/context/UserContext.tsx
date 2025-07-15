// src/contexts/UserContext.tsx
import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

// 1. Define the interface for the context's value
export interface UserContextType {
  name: string | null; // The name state itself
  setName: Dispatch<SetStateAction<string | null>>; // The function to update the name state
}

// 2. Create the Context object
// It's typed to hold UserContextType or undefined (when no provider is active).
// The initial value is `undefined`.
export const UserContext = createContext<UserContextType | undefined>(undefined);

// 3. Create a custom hook to consume the context safely
export const useUser = () => {
  const context = useContext(UserContext); // Attempt to get the context value

  // If `context` is undefined, it means this hook was called outside of a <UserProvider>
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context; // Now TypeScript knows `context` is of type `UserContextType`
};

// 4. (Optional but Recommended) Create a Provider Component
// This component encapsulates the state logic and makes it reusable.
interface UserProviderProps {
  children: ReactNode; // Represents the child components that will be wrapped by this provider
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [name, setName] = useState<string | null>(null); // State for the user's name

  // The value object that will be passed down through the context
  const contextValue: UserContextType = {
    name,
    setName,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};