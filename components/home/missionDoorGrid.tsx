import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

interface MissionDoorGridProps {
  style?: any;
}

export function MissionDoorGrid({ style }: MissionDoorGridProps) {
  return (
    <View style={[styles.container, style]}>
      <Link href="mission/index" asChild>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/0bgealkc_expires_30_days.png",
          }}
          resizeMode="stretch"
          style={styles.image}
        />
      </Link>
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
