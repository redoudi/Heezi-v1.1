import { Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { typography } from "@/styles/typography";

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
        type === "default" ? typography.body : undefined,
        type === "title" ? typography.display : undefined,
        type === "defaultSemiBold" ? typography.bodySemiBold : undefined,
        type === "subtitle" ? typography.bodyLargeBold : undefined,
        type === "link" ? [typography.body, themedLinkStyle] : undefined,
        style,
      ]}
      {...rest}
    />
  );
}