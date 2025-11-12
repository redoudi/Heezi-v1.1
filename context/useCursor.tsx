import { ReactNode, createContext, useContext, useState } from "react";

// Define your context state type here
type CursorState = {
  // Add your state properties here
  // Example: position: { x: number; y: number };
};

// Define your context value type
type CursorContextType = {
  // Add your state and setter functions here
  // Example:
  // cursor: CursorState;
  // setCursor: (cursor: CursorState) => void;
};

// Create the context with default values
const CursorContext = createContext<CursorContextType>({
  // Add default values matching CursorContextType
  // Example:
  // cursor: { x: 0, y: 0 },
  // setCursor: () => {},
});

// Provider component
export function CursorProvider({ children }: { children: ReactNode }) {
  // Add your state hooks here
  // Example:
  // const [cursor, setCursor] = useState<CursorState>({ x: 0, y: 0 });

  return (
    <CursorContext.Provider
      value={
        {
          // Add your context values here
          // Example: cursor, setCursor
        }
      }
    >
      {children}
    </CursorContext.Provider>
  );
}

// Custom hook to use the context
export default function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
