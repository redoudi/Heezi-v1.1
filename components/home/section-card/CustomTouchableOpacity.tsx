import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface CustomTouchableOpacityProps extends TouchableOpacityProps {
  hoverOverlayOpacity?: number;
  hoverOverlayColor?: string;
}

export default function CustomTouchableOpacity({
  children,
  style,
  disabled,
  hoverOverlayOpacity = 0.2,
  hoverOverlayColor = "rgba(255, 255, 255, 0.2)",
  ...props
}: CustomTouchableOpacityProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View
      {...({
        onMouseEnter: () => !disabled && setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      } as any)}
      style={styles.wrapper}
    >
      <TouchableOpacity
        style={[styles.button, style]}
        disabled={disabled}
        {...props}
      >
        {children}
        {isHovered && !disabled && (
          <View
            style={[
              styles.hoverOverlay,
              { backgroundColor: hoverOverlayColor },
            ]}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  button: {
    position: "relative",
    overflow: "hidden",
  },
  hoverOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
  },
});

