import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CourseCardProps {
  thumbnailUri: string;
  progress: string;
  status: string;
  title: string;
  description: string;
  onPress: () => void;
}

export function CourseCard({
  thumbnailUri,
  progress,
  status,
  title,
  description,
  onPress,
}: CourseCardProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/ldtg9pud_expires_30_days.png")}
        resizeMode="stretch"
        style={styles.thumbnail}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.progressText}>{progress}</Text>
          <TouchableOpacity style={styles.statusButton} onPress={onPress}>
            <Text style={styles.statusText}>{status}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 32,
  },
  thumbnail: {
    width: 173,
    height: 173,
    marginRight: 16,
  },
  content: {
    width: 552,
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 15,
  },
  progressText: {
    color: "#1C5348",
    fontSize: 14,
    flex: 1,
  },
  statusButton: {
    width: 68,
    alignItems: "center",
    backgroundColor: "#A6E9D4",
    borderRadius: 8,
    paddingVertical: 4,
  },
  statusText: {
    color: "#0A2924",
    fontSize: 16,
  },
  title: {
    color: "#0A2924",
    fontSize: 28,
    marginBottom: 7,
    marginLeft: 15,
  },
  description: {
    color: "#0A2924",
    fontSize: 16,
    marginLeft: 15,
  },
});
