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
  setContentRef: (id: string, ref: any) => void;
  contentsRefs: { [key: string]: any };
  hideCursor: () => void;
  showCursor: () => void;
};

// Create the context with default values
const CursorContext = createContext<CursorContextType>({
  cursorRef: { current: null },
  cursorPosition: { x: 0, y: 0 },
  moveCursor: () => {},
  setContentRef: () => {},
  contentsRefs: {},
  hideCursor: () => {},
  showCursor: () => {},
});

// Provider component
export function CursorProvider({ children }: { children: ReactNode }) {
  const cursorRef = useRef<any>(null);
  const [cursorPosition, setCursorPosition] = useState<CursorState>({
    x: 0,
    y: 0,
  });
  const contentsRefs = useRef<{ [key: string]: any }>({});

  const setContentRef = (id: string, ref: any) => {
    contentsRefs.current[id] = ref;
    console.log("contentsRefs", contentsRefs.current);
  };

  const moveCursor = (
    elementId: string,
    offsetX: number = 0,
    offsetY: number = 0
  ) => {
    showCursor();
    const ref = contentsRefs.current[elementId];
    if (ref && ref.current) {
      // In React Native Web, ref.current should be the DOM element
      const element = ref.current;

      // Check if it's a DOM element with getBoundingClientRect
      if (typeof element.getBoundingClientRect === "function") {
        const rect = element.getBoundingClientRect();
        // Calculate center of the element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Cursor size is 20x20, so offset by half to center it
        const cursorSize = 20;
        const cursorOffset = cursorSize / 2;
        setCursorPosition({
          x: centerX - cursorOffset + offsetX,
          y: centerY - cursorOffset + offsetY,
        });
        console.log(
          "moveCursor to element",
          elementId,
          "at center",
          centerX - cursorOffset + offsetX,
          centerY - cursorOffset + offsetY
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

  const hideCursor = () => {
    cursorRef.current.style.visibility = "hidden";
  };

  const showCursor = () => {
    cursorRef.current.style.visibility = "visible";
  };

  return (
    <CursorContext.Provider
      value={{
        cursorRef,
        cursorPosition,
        moveCursor,
        setContentRef,
        contentsRefs,
        hideCursor,
        showCursor,
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
