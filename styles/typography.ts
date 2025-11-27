import type { TextStyle } from "react-native";
import { StyleSheet } from "react-native";

const base = (
  fontSize: number,
  options?: {
    lineHeight?: number;
    fontWeight?:
      | "normal"
      | "bold"
      | "100"
      | "200"
      | "300"
      | "400"
      | "500"
      | "600"
      | "700"
      | "800"
      | "900";
  }
) => ({
  fontSize,
  ...(options?.lineHeight ? { lineHeight: options.lineHeight } : {}),
  ...(options?.fontWeight ? { fontWeight: options.fontWeight } : {}),
});

export const typography = StyleSheet.create({
  display: base(28, { lineHeight: 32, fontWeight: "bold" }),
  title: base(24),
  titleBold: base(24, { fontWeight: "bold" }),
  headline: base(20, { fontWeight: "bold" }),
  bodyLarge: base(16),
  bodyLargeBold: base(16, { fontWeight: "bold" }),
  body: base(12, { lineHeight: 24 }),
  bodySemiBold: base(12, { lineHeight: 24, fontWeight: "600" }),
  bodyBold: base(12, { fontWeight: "bold" }),
  caption: base(10),
  captionBold: base(10, { fontWeight: "bold" }),
  captionSmall: base(8),
});

export type TypographyVariant = keyof typeof typography;

export const withTextStyle = (
  base: TextStyle,
  overrides?: TextStyle
): TextStyle => StyleSheet.flatten([base, overrides]) as TextStyle;
