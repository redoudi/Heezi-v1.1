import { CourseCard } from "@/components/home/course-card";
import ContinuerSectionBtn from "@/components/home/section-card/ContinuerSectionBtn";
import { ScrollableScreen } from "@/components/scrollable-screen";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

function SectionCard({
  mascotImageSource,
  sectionNumber,
}: {
  mascotImageSource: number;
  sectionNumber: number;
}) {
  return (
    <View style={styles.row3}>
      <View style={styles.column3}>
        <View style={styles.column}>
          <Text style={styles.text3}>{`Section ${sectionNumber}`}</Text>
          <View style={styles.view2}>
            <View style={styles.view3}>
              <View style={styles.box}></View>
            </View>
          </View>
        </View>
        <ContinuerSectionBtn disabled={true} />
      </View>
      <Image
        source={mascotImageSource}
        resizeMode={"contain"}
        style={styles.image8}
      />
    </View>
  );
}

export default function SectionsList() {
  const { toolConstants, practiceTool } = usePracticeToolConstants();

  return (
    <ScrollableScreen contentContainerStyle={styles.container}>
      <CourseCard />
      <View style={styles.column}>
        <View
          style={[
            styles.column2,
            { backgroundColor: toolConstants.secondaryColor },
          ]}
        >
          <View>
            <Text style={styles.text}>{"Section 1"}</Text>
            <View style={styles.button}>
              <View style={styles.view}>
                <View style={styles.box}></View>
              </View>
            </View>
            <ContinuerSectionBtn
              onPress={() =>
                router.push(`/(tabs)/play/${practiceTool}/section-screen`)
              }
            />
          </View>
          <Image
            source={require("@/assets/images/aik0c764_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.absoluteImage6}
          />
        </View>
      </View>
      <SectionCard
        mascotImageSource={require("@/assets/images/kvf6wzrn_expires_30_days.png")}
        sectionNumber={2}
      />
      <SectionCard
        mascotImageSource={require("@/assets/images/xdcz0s8c_expires_30_days.png")}
        sectionNumber={3}
      />
    </ScrollableScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    gap: 32,
  },
  absoluteImage: {
    position: "absolute",
    top: 28,
    right: 67,
    width: 141,
    height: 28,
  },
  absoluteImage2: {
    position: "absolute",
    top: 29,
    right: 67,
    width: 141,
    height: 36,
  },
  absoluteImage3: {
    position: "absolute",
    top: 0,
    right: 116,
    width: 57,
    height: 47,
  },
  absoluteImage4: {
    position: "absolute",
    bottom: 24,
    right: 0,
    width: 57,
    height: 6,
  },
  absoluteImage5: {
    position: "absolute",
    bottom: 9,
    right: 25,
    width: 6,
    height: 28,
  },
  absoluteImage6: {},
  box: {
    width: 63,
    height: 8,
    backgroundColor: "#33C6FD",
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginBottom: 7,
    marginLeft: 32,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 24,
    marginRight: 25,
  },
  buttonRow2: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 33,
  },
  buttonRow3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 57,
  },
  column: {
    marginBottom: 32,
  },
  column2: {
    borderRadius: 8,
    paddingVertical: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column3: {
    flex: 1,
    marginRight: 33,
  },
  image: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  image2: {
    width: 10,
    height: 86,
    marginTop: 60,
    marginRight: 65,
  },
  image3: {
    width: 7,
    height: 78,
    marginTop: 32,
    marginRight: 23,
  },
  image4: {
    width: 10,
    height: 86,
    marginTop: 60,
    marginRight: 18,
  },
  image5: {
    width: 7,
    height: 78,
    marginTop: 32,
    marginRight: 34,
  },
  image6: {
    width: 8,
    height: 45,
    marginTop: 74,
    marginRight: 25,
  },
  image7: {
    borderRadius: 8,
    height: 171,
    flex: 1,
  },
  image8: {
    borderRadius: 8,
    height: 195,
    flex: 1,
  },
  row: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginLeft: 32,
  },
  row2: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 32,
    marginBottom: 32,
  },
  row3: {
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 32,
  },
  text: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 32,
  },
  text2: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 11,
  },
  text3: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  text4: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 11,
  },
  view: {
    alignSelf: "flex-start",
    backgroundColor: "#989898",
    borderRadius: 4,
    paddingRight: 120,
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
