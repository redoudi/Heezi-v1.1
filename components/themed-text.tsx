import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

const themedLinkStyle = { lineHeight: 30, color: "#0a7ea4" };

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  return (
    <Text
      style={[
        { color },
        type === "default" ? { fontSize: 10, lineHeight: 24 } : undefined,
        type === "title" ? { fontSize: 26, lineHeight: 32, fontWeight: "bold" } : undefined,
        type === "defaultSemiBold" ? { fontSize: 10, lineHeight: 24, fontWeight: "600" } : undefined,
        type === "subtitle" ? { fontSize: 14, fontWeight: "bold" } : undefined,
        type === "link" ? [{ fontSize: 10, lineHeight: 24 }, themedLinkStyle] : undefined,
        style,
      ]}
      {...rest}
    />
  );
}