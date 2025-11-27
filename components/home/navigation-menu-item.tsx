import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography } from "@/styles/typography";

interface NavigationMenuItemProps {
  imageUri: string;
  label: string;
}

export function NavigationMenuItem({
  imageUri,
  label,
}: NavigationMenuItemProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        resizeMode="stretch"
        style={styles.image}
      />
      <ThemedText style={styles.text}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 24,
    marginLeft: 7,
  },
  image: {
    borderRadius: 8,
    width: 48,
    height: 48,
    marginRight: 16,
  },
  text: StyleSheet.compose(typography.headline, {
    color: "#292929",
  }),
});
