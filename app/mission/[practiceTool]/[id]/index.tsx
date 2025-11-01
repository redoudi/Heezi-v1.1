import BackButton from "@/components/ui/back-button";
import useLevelData from "@/hooks/use-level-data";
import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ScenarioScreen() {
  // useLoadLevel();
  const { practiceTool, id } = useLocalSearchParams();
  const { intro } = useLevelData();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.column}>
          <View style={styles.view2}>
            <BackButton />
          </View>
          <View style={styles.view3}>
            <View style={styles.column2}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/5pc0oof0_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image2}
              />
              <View style={styles.view4}>
                <Text style={styles.text}>{intro}</Text>
              </View>
              <TouchableOpacity
                style={styles.buttonRow}
                onPress={() =>
                  router.push(`/mission/${practiceTool}/${id}/practice`)
                }
              >
                <Text style={styles.text2}>{"Commencer"}</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/q6vunbbw_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image3}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    padding: 16,
  },
  buttonRow: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#72D6BA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 391,
  },
  column: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 32,
  },
  column2: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 16,
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  image: {
    borderRadius: 8,
    width: 30,
    height: 32,
  },
  image2: {
    borderRadius: 8,
    width: 568,
    height: 711,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  image3: {
    borderRadius: 8,
    width: 16,
    height: 24,
  },
  text: {
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
  },
  text2: {
    color: "#0A2924",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 11,
  },
  view: {
    width: 1440,
    backgroundColor: "#FFFFFF",
  },
  view2: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingLeft: 388,
    marginBottom: 16,
    marginHorizontal: 32,
  },
  view3: {
    alignItems: "center",
    marginHorizontal: 40,
  },
  view4: {
    alignSelf: "flex-start",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 57,
    marginBottom: 8,
    marginLeft: 16,
  },
});
