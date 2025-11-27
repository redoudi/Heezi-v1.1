import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { typography, withTextStyle } from "@/styles/typography";
import ContinuerSectionBtn from "./ContinuerSectionBtn";
import ProgressBar from "./ProgressBar";

export default function SectionCard({
  mascotImageSource,
  sectionNumber,
  continuerRoute = "",
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
        <ThemedText style={styles.sectionHeader}>{`Section ${sectionNumber}`}</ThemedText>
        <View style={styles.progressAndContinuer}>
          <ProgressBar />
          <ContinuerSectionBtn continuerRoute={continuerRoute} />
        </View>
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
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  progressAndContinuer: { justifyContent: "space-between", flex: 1 },
  sectionHeader: withTextStyle(typography.headline, {
    color: "#000000",
    marginBottom: 15,
    marginLeft: 8,
  }),
  imageContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  image8: {
    borderRadius: 8,
    height: 195,
    flex: 1,
  },
});
