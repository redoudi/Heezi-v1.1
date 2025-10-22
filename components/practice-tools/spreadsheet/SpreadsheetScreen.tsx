import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../ui/back-button";
import FunctionBar from "./function-bar";
import SpreadsheetGrid from "./grid/spreadsheet-grid";
import Ribbon from "./ribbon/ribbon";
import RibbonTabs from "./ribbon/ribbon-tabs";
import { styles } from "./spreadsheet-styles";

export default function SpreadsheetScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <View style={styles.column2}>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/5jt7jwsg_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/os183jfm_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image2}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={styles.image3}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={styles.image4}
            />
            <BackButton
              containerStyle={styles.button}
              imageStyle={styles.image5}
            />
          </View>
          <RibbonTabs />
          <Ribbon />
          <FunctionBar />
        </View>
        <SpreadsheetGrid />
        <View style={styles.column13}>
          <View style={styles.row16}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/4z87rs57_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image36}
            />
            <TouchableOpacity
              style={styles.button28}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/o6j3pvf5_expires_30_days.png",
                }}
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
          <TouchableOpacity
            style={styles.buttonRow8}
            onPress={() => alert("Pressed!")}
          >
            <Text style={styles.text11}>{"Envoyer"}</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/bg345eii_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image38}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
