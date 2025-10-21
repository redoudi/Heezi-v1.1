import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../ui/back-button";
import { styles } from "./window-topbar";

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
          <View style={styles.row4}>
            <View style={styles.column3}>
              <View style={styles.row5}>
                <TouchableOpacity
                  style={styles.buttonColumn}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/1fzbdkqt_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image8}
                  />
                  <Text style={styles.text2}>{"Coller"}</Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/37i3d2ye_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image9}
                  />
                </TouchableOpacity>
                <View style={styles.column4}>
                  <TouchableOpacity
                    style={styles.button11}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/y25kezvs_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image10}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button12}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/jz6td9an_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image11}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.text3}>{"Presse-papiers"}</Text>
            </View>
            <View style={styles.column5}>
              <View style={styles.column6}>
                <View style={styles.row6}>
                  <TouchableOpacity
                    style={styles.buttonRow}
                    onPress={() => alert("Pressed!")}
                  >
                    <Text style={styles.text4}>{"Police"}</Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/3jmssrjq_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image12}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonRow2}
                    onPress={() => alert("Pressed!")}
                  >
                    <Text style={styles.text5}>{"12"}</Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/bk05j5hf_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image12}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row7}>
                  <TouchableOpacity
                    style={styles.button13}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/grsf2bb1_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image13}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button14}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/wbsdd6yd_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image14}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button15}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/shmc35k2_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image15}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button16}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/7czrdf4k_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image16}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button17}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ath16u4f_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image17}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button18}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/uewh91sl_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image18}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.text6}>{"Police"}</Text>
            </View>
            <View style={styles.column7}>
              <View style={styles.row8}>
                <TouchableOpacity
                  style={styles.button19}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/nkzp2nt3_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image19}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button19}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/y7bq5psu_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image19}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button20}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/gxdqlt2g_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image19}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button21}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/mc2ln7j3_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image20}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.row9}>
                <TouchableOpacity
                  style={styles.button22}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/uirt4emu_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image21}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button20}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/393nlgpw_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image19}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button23}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/e7u96dzs_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image21}
                  />
                </TouchableOpacity>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={styles.image22}
                />
                <TouchableOpacity
                  style={styles.button24}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/h7fhqw57_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image20}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button25}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/lxt8yo0p_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image20}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.view}>
                <Text style={styles.text6}>{"Paragraphe"}</Text>
              </View>
            </View>
            <View style={styles.column8}>
              <TouchableOpacity
                style={styles.buttonRow3}
                onPress={() => alert("Pressed!")}
              >
                <Text style={styles.text4}>{"Standard"}</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/f0blr7yj_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image23}
                />
              </TouchableOpacity>
              <View style={styles.row10}>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={styles.image24}
                />
                <TouchableOpacity
                  style={styles.button26}
                  onPress={() => alert("Pressed!")}
                >
                  <Text style={styles.text7}>{"%"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button27}
                  onPress={() => alert("Pressed!")}
                >
                  <Text style={styles.text7}>{"000"}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.text3}>{"Nombre"}</Text>
            </View>
            <View style={styles.column9}>
              <View style={styles.row11}>
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={styles.image25}
                />
                <Image
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={styles.image26}
                />
              </View>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={styles.image27}
              />
              <Text style={styles.text3}>{"Styles"}</Text>
            </View>
            <View style={styles.column10}>
              <View style={styles.column11}>
                <View style={styles.row12}>
                  <TouchableOpacity
                    style={styles.buttonRow4}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/6p0qmdld_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image28}
                    />
                    <Text style={styles.text7}>{"Insérer"}</Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/bm26nyo6_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image29}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonRow5}
                    onPress={() => alert("Pressed!")}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/3psjry5g_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image28}
                    />
                    <Text style={styles.text7}>{"Supprimer"}</Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ihd2alr2_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={styles.image23}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.buttonRow6}
                  onPress={() => alert("Pressed!")}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ueuz0btu_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image30}
                  />
                  <Text style={styles.text8}>{"Format"}</Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/x88mmd51_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image29}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.text6}>{"Cellules"}</Text>
            </View>
          </View>
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
