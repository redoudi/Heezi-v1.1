import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface ImageGridProps {
  imageUris: string[];
  style?: any;
}

export function ImageGrid({ imageUris, style }: ImageGridProps) {
  return (
    <View style={[styles.container, style]}>
      {imageUris.map((uri, index) => (
        <Image
          key={index}
          source={{ uri }}
          resizeMode="stretch"
          style={
            index === imageUris.length - 1 ? styles.lastImage : styles.image
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  image: {
    width: 116,
    height: 163,
    marginRight: 8,
  },
  lastImage: {
    width: 116,
    height: 163,
  },
});
