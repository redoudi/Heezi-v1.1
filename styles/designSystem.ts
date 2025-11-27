import type { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

export const palette = {
  background: "#FFFFFF",
  surface: "#EFEFEF",
  surfaceMuted: "#D9D9D9",
  divider: "#989898",
  primaryText: "#292929",
  secondaryText: "#black",
  tertiaryText: "#1C5348",
  accentOrange: "#F28B0E",
  accentCoral: "#F95F3C",
  accentTeal: "#72D6BA",
  accentMint: "#A6E9D4",
  accentGold: "#FDC1AB",
  accentSeafoam: "#45BC9E",
  outline: "#000000",
  textOnPrimary: "#F2FBF8",
};

export const spacing = {
  none: 0,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radius = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 16,
};

export const borders = {
  thin: 1,
  medium: 2,
};

export const shadows = {
  raised: {
    shadowColor: "#1E6759",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 6,
  },
};

export const surfaces = StyleSheet.create({
  card: {
    backgroundColor: palette.surface,
    borderRadius: radius.md,
  },
  elevatedCard: {
    backgroundColor: palette.background,
    borderRadius: radius.md,
    ...shadows.raised,
  },
});

export const withViewStyle = (
  base: ViewStyle,
  overrides?: ViewStyle
): ViewStyle => StyleSheet.flatten([base, overrides]) as ViewStyle;
