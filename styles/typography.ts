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
  display: base(32, { lineHeight: 32, fontWeight: "bold" }),
  title: base(28),
  titleBold: base(28, { fontWeight: "bold" }),
  headline: base(24, { fontWeight: "bold" }),
  bodyLarge: base(20),
  bodyLargeBold: base(20, { fontWeight: "bold" }),
  body: base(16, { lineHeight: 24 }),
  bodySemiBold: base(16, { lineHeight: 24, fontWeight: "600" }),
  bodyBold: base(16, { fontWeight: "bold" }),
  caption: base(14),
  captionBold: base(14, { fontWeight: "bold" }),
  captionSmall: base(12),
});

export type TypographyVariant = keyof typeof typography;

export const withTextStyle = (
  base: TextStyle,
  overrides?: TextStyle
): TextStyle => StyleSheet.flatten([base, overrides]) as TextStyle;
