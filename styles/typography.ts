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
  display: base(30, { lineHeight: 32, fontWeight: "bold" }),
  title: base(26),
  titleBold: base(26, { fontWeight: "bold" }),
  headline: base(22, { fontWeight: "bold" }),
  bodyLarge: base(18),
  bodyLargeBold: base(18, { fontWeight: "bold" }),
  body: base(14, { lineHeight: 24 }),
  bodySemiBold: base(14, { lineHeight: 24, fontWeight: "600" }),
  bodyBold: base(14, { fontWeight: "bold" }),
  caption: base(12),
  captionBold: base(12, { fontWeight: "bold" }),
  captionSmall: base(10),
});

export type TypographyVariant = keyof typeof typography;

export const withTextStyle = (
  base: TextStyle,
  overrides?: TextStyle
): TextStyle => StyleSheet.flatten([base, overrides]) as TextStyle;
