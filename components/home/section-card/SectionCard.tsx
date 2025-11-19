import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, Text, View } from "react-native";
import ContinuerSectionBtn from "./ContinuerSectionBtn";
import ProgressBar from "./ProgressBar";

export default function SectionCard({
  mascotImageSource,
  sectionNumber,
  continuerRoute,
}: {
  mascotImageSource: number;
  sectionNumber: number;
  continuerRoute: string;
}) {
  const disabled = !!!continuerRoute;
  const { toolConstants } = usePracticeToolConstants();
  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: disabled ? undefined : toolConstants.secondaryColor,
        },
      ]}
    >
      <View style={styles.leftColumn}>
        <View style={styles.sectionAndProgress}>
          <Text style={styles.sectionHeader}>{`Section ${sectionNumber}`}</Text>
          <ProgressBar />
        </View>
        <ContinuerSectionBtn disabled={disabled} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={mascotImageSource}
          resizeMode={"contain"}
          style={styles.image8}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 32,
    justifyContent: "space-between",
  },
  leftColumn: {
    flex: 1,
    marginRight: 33,
    borderWidth: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  sectionAndProgress: { borderWidth: 1, justifyContent: "space-between" },
  sectionHeader: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  imageContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: "flex-end",
  },
  image8: {
    borderRadius: 8,
    height: 195,
    flex: 1,
  },
});
