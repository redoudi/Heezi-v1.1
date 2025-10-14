import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CategoryCardProps {
  title: string;
  backgroundColor: string;
  textColor: string;
}

export function CategoryCard({
  title,
  backgroundColor,
  textColor,
}: CategoryCardProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 49,
    marginBottom: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
});
