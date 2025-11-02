import { router } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function BackButton({ style }) {
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/(tabs)")}
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/iycoag37_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image5}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    alignItems: "center",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 32,
  },
  image5: {
    borderRadius: 8,
    width: 24,
    height: 24,
  },
});
