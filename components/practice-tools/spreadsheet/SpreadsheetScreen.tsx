import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../../ui/back-button";
import Ribbons from "../ribbon/ribbon";
import { styles } from "./titlebar";

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
          <View style={styles.row2}>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Accueil"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Insertion"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button4}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Dessin"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button5}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Conception"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button6}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Mise en page"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button7}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Références"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button5}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Publipostage"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button4}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Révision"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button8}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text}>{"Affichage"}</Text>
            </TouchableOpacity>
            <View style={styles.row3}>
              <TouchableOpacity
                style={styles.button9}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/86rkedvc_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image6}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button10}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/zromobil_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image7}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Ribbons />
          <View style={styles.row4}>
            <TouchableOpacity
              style={styles.buttonRow7}
              onPress={() => alert("Pressed!")}
            >
              <Text style={styles.text5}>{"A20"}</Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/w85265az_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image12}
              />
            </TouchableOpacity>
            <View style={styles.row13}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/cmx9ciy9_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image31}
              />
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/2cz9arwn_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image32}
              />
              <View style={styles.row14}>
                <Text style={styles.text8}>{"fx"}</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/fp37iklk_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image33}
                />
              </View>
            </View>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={styles.image34}
            />
          </View>
        </View>
        <View style={styles.column12}>
          <View style={styles.row15}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/pt024urq_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image35}
            />
            <View style={styles.view2}>
              <Text style={styles.text9}>{"A"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"B"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"C"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"D"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"E"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"F"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"G"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"H"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"I"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"J"}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text9}>{"K"}</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text9}>{"L"}</Text>
            </View>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view4}>
              <Text style={styles.text10}>{"1"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view5}>
              <Text style={styles.text10}>{"2"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view5}>
              <Text style={styles.text10}>{"3"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view6}>
              <Text style={styles.text10}>{"4"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view5}>
              <Text style={styles.text10}>{"5"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view5}>
              <Text style={styles.text10}>{"6"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view7}>
              <Text style={styles.text10}>{"7"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view5}>
              <Text style={styles.text10}>{"8"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view5}>
              <Text style={styles.text10}>{"9"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view8}>
              <Text style={styles.text10}>{"10"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view9}>
              <Text style={styles.text10}>{"11"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view10}>
              <Text style={styles.text10}>{"12"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view10}>
              <Text style={styles.text10}>{"13"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view8}>
              <Text style={styles.text10}>{"14"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view10}>
              <Text style={styles.text10}>{"15"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view10}>
              <Text style={styles.text10}>{"16"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <View style={styles.view11}>
              <Text style={styles.text10}>{"17"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView2}
          >
            <View style={styles.view10}>
              <Text style={styles.text10}>{"18"}</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box2}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box3}></View>
          </ScrollView>
        </View>
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
