import { ReactNode, createContext, useContext, useRef, useState } from "react";

// Define your context state type here
// Example: cursor position
type CursorState = {
  x: number;
  y: number;
};

// Define your context value type
type CursorContextType = {
  cursorRef: React.RefObject<any>;
  cursorPosition: CursorState;
  moveCursor: (x: number, y: number) => void;
};

// Create the context with default values
const CursorContext = createContext<CursorContextType>({
  cursorRef: { current: null },
  cursorPosition: { x: 0, y: 0 },
  moveCursor: () => {},
});

// Provider component
export function CursorProvider({ children }: { children: ReactNode }) {
  const cursorRef = useRef<any>(null);
  const [cursorPosition, setCursorPosition] = useState<CursorState>({
    x: 0,
    y: 0,
  });

  const moveCursor = (x: number, y: number) => {
    console.log("moveCursor", x, y);
    setCursorPosition({ x, y });
  };

  return (
    <CursorContext.Provider value={{ cursorRef, cursorPosition, moveCursor }}>
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
