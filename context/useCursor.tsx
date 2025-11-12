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
  moveCursor: (elementId: string, offsetX?: number, offsetY?: number) => void;
  setContentsRef: (id: string, ref: any) => void;
  contentsRefs: { [key: string]: any };
};

// Create the context with default values
const CursorContext = createContext<CursorContextType>({
  cursorRef: { current: null },
  cursorPosition: { x: 0, y: 0 },
  moveCursor: () => {},
  setContentsRef: () => {},
  contentsRefs: {},
});

// Provider component
export function CursorProvider({ children }: { children: ReactNode }) {
  const cursorRef = useRef<any>(null);
  const [cursorPosition, setCursorPosition] = useState<CursorState>({
    x: 0,
    y: 0,
  });
  const contentsRefs = useRef<{ [key: string]: any }>({});
  const [contentsRefsState, setContentsRefsState] = useState<{
    [key: string]: any;
  }>({});

  const setContentsRef = (id: string, ref: any) => {
    contentsRefs.current[id] = ref;
    setContentsRefsState({ ...contentsRefs.current });
    console.log("contentsRefs", contentsRefs.current);
  };

  const moveCursor = (
    elementId: string,
    offsetX: number = 0,
    offsetY: number = 0
  ) => {
    const ref = contentsRefs.current[elementId];
    if (ref && ref.current) {
      // In React Native Web, ref.current should be the DOM element
      const element = ref.current;

      // Check if it's a DOM element with getBoundingClientRect
      if (typeof element.getBoundingClientRect === "function") {
        const rect = element.getBoundingClientRect();
        setCursorPosition({
          x: rect.left + offsetX,
          y: rect.top + offsetY,
        });
        console.log(
          "moveCursor to element",
          elementId,
          "at",
          rect.left + offsetX,
          rect.top + offsetY
        );
      } else {
        console.warn("Element does not have getBoundingClientRect", element);
      }
    } else {
      console.warn(
        "Element ref not found for",
        elementId,
        "refs:",
        contentsRefs.current
      );
    }
  };

  return (
    <CursorContext.Provider
      value={{
        cursorRef,
        cursorPosition,
        moveCursor,
        setContentsRef,
        contentsRefs: contentsRefsState,
      }}
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
