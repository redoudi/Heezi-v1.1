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
  display: base(26, { lineHeight: 32, fontWeight: "bold" }),
  title: base(22),
  titleBold: base(22, { fontWeight: "bold" }),
  headline: base(18, { fontWeight: "bold" }),
  bodyLarge: base(14),
  bodyLargeBold: base(14, { fontWeight: "bold" }),
  body: base(10, { lineHeight: 24 }),
  bodySemiBold: base(10, { lineHeight: 24, fontWeight: "600" }),
  bodyBold: base(10, { fontWeight: "bold" }),
  caption: base(8),
  captionBold: base(8, { fontWeight: "bold" }),
  captionSmall: base(6),
});

export type TypographyVariant = keyof typeof typography;

export const withTextStyle = (
  base: TextStyle,
  overrides?: TextStyle
): TextStyle => StyleSheet.flatten([base, overrides]) as TextStyle;
