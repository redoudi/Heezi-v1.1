import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { Image, StyleSheet, Text, View } from "react-native";
import ContinuerSectionBtn from "./ContinuerSectionBtn";

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
        styles.row3,
        {
          backgroundColor: disabled ? undefined : toolConstants.secondaryColor,
        },
      ]}
    >
      <View style={styles.column3}>
        <View style={styles.column}>
          <Text style={styles.text3}>{`Section ${sectionNumber}`}</Text>
          <View style={styles.view2}>
            <View style={styles.view3}>
              <View style={styles.box}></View>
            </View>
          </View>
        </View>
        <ContinuerSectionBtn disabled={disabled} />
      </View>
      <Image
        source={mascotImageSource}
        resizeMode={"contain"}
        style={styles.image8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 63,
    height: 8,
    backgroundColor: "#33C6FD",
  },
  column: {
    marginBottom: 32,
  },
  column3: {
    flex: 1,
    marginRight: 33,
  },
  image8: {
    borderRadius: 8,
    height: 195,
    flex: 1,
  },
  row3: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 32,
  },
  text3: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  view2: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
  },
  view3: {
    backgroundColor: "#989898",
    borderRadius: 4,
  },
});
