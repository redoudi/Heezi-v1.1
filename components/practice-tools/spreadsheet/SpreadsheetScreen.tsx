import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import FunctionBar from "./function-bar";
import SpreadsheetGrid from "./grid/spreadsheet-grid";
import Ribbon from "./ribbon/spreadsheet-ribbon";
import RibbonTabs from "./ribbon/spreadsheet-ribbon-tabs";
import { styles } from "./spreadsheet-styles";
import TitleBar from "./title-bar";

export default function SpreadsheetScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <View style={styles.column2}>
          <TitleBar />
          <RibbonTabs />
          <Ribbon />
          <FunctionBar />
        </View>
        <SpreadsheetGrid />
        <View style={styles.column13}>
          <View style={styles.row16}>
            <Image
              source={require("@/assets/images/4z87rs57_expires_30_days.png")}
              resizeMode={"stretch"}
              style={styles.image36}
            />
            <TouchableOpacity
              style={styles.button28}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={require("@/assets/images/o6j3pvf5_expires_30_days.png")}
                resizeMode={"stretch"}
                style={styles.image37}
              />
            </TouchableOpacity>
            <View style={styles.view12}>
              <View style={styles.view13}>
                <View style={styles.box4}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
