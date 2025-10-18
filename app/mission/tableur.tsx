import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function TableurScreen() {
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/iycoag37_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image5}
              />
            </TouchableOpacity>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  box: {
    width: 107,
    height: 34,
    backgroundColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 8,
  },
  box2: {
    width: 107,
    height: 34,
    backgroundColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 9,
  },
  box3: {
    width: 107,
    height: 34,
    backgroundColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    borderRadius: 8,
    borderWidth: 1,
  },
  box4: {
    width: 63,
    height: 8,
    backgroundColor: "#45BC9E",
  },
  button: {
    width: 40,
    alignItems: "center",
    backgroundColor: "#FDC1AB",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 32,
  },
  button2: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginLeft: 32,
    marginRight: 8,
  },
  button3: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button4: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 9,
  },
  button5: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 8,
  },
  button6: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 9,
  },
  button7: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 9,
    marginRight: 8,
  },
  button8: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#989898",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 65,
  },
  button9: {
    width: 33,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button10: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button11: {
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 4,
  },
  button12: {
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button13: {
    width: 23,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  button14: {
    width: 22,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  button15: {
    width: 24,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 20,
  },
  button16: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 7,
    marginRight: 10,
  },
  button17: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  button18: {
    width: 28,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button19: {
    width: 29,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 4,
  },
  button20: {
    width: 29,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button21: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button22: {
    width: 30,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button23: {
    width: 30,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 16,
  },
  button24: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button25: {
    width: 30,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button26: {
    width: 26,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 8,
  },
  button27: {
    width: 44,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button28: {
    width: 62,
    alignItems: "center",
    backgroundColor: "#33C6FD",
    borderRadius: 8,
    paddingVertical: 16,
    marginRight: 16,
  },
  buttonColumn: {
    width: 54,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  buttonRow: {
    width: 72,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  buttonRow2: {
    width: 73,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 10,
  },
  buttonRow3: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 10,
  },
  buttonRow4: {
    width: 92,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 9,
  },
  buttonRow5: {
    width: 114,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  buttonRow6: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  buttonRow7: {
    width: 88,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginLeft: 32,
    marginRight: 8,
  },
  buttonRow8: {
    width: 297,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9BE3C",
    borderRadius: 8,
    paddingVertical: 8,
  },
  column: {
    width: 1440,
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  column2: {
    marginTop: 2,
    marginBottom: 3,
  },
  column3: {
    width: 97,
    marginLeft: 32,
    marginRight: 16,
  },
  column4: {
    width: 35,
  },
  column5: {
    width: 229,
    alignItems: "center",
    marginRight: 16,
  },
  column6: {
    marginBottom: 16,
  },
  column7: {
    width: 244,
    marginRight: 16,
  },
  column8: {
    width: 133,
    marginRight: 16,
  },
  column9: {
    width: 99,
    marginRight: 16,
  },
  column10: {
    width: 216,
    alignItems: "center",
    marginRight: 309,
  },
  column11: {
    marginBottom: 11,
  },
  column12: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 17,
    marginHorizontal: 8,
  },
  column13: {
    alignSelf: "flex-start",
    marginBottom: 32,
    marginLeft: 32,
  },
  image: {
    width: 38,
    height: 32,
    marginLeft: 32,
    marginRight: 8,
  },
  image2: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  image3: {
    width: 61,
    height: 39,
    marginRight: 8,
  },
  image4: {
    width: 39,
    height: 42,
    marginRight: 1134,
  },
  image5: {
    borderRadius: 8,
    width: 24,
    height: 24,
  },
  image6: {
    borderRadius: 8,
    width: 17,
    height: 16,
  },
  image7: {
    borderRadius: 8,
    width: 17,
    height: 17,
  },
  image8: {
    borderRadius: 8,
    width: 26,
    height: 31,
    marginBottom: 4,
  },
  image9: {
    borderRadius: 8,
    width: 9,
    height: 6,
  },
  image10: {
    borderRadius: 8,
    width: 19,
    height: 23,
  },
  image11: {
    borderRadius: 8,
    width: 18,
    height: 18,
  },
  image12: {
    borderRadius: 8,
    width: 9,
    height: 6,
    marginRight: 8,
  },
  image13: {
    borderRadius: 8,
    width: 7,
    height: 10,
  },
  image14: {
    borderRadius: 8,
    width: 6,
    height: 10,
  },
  image15: {
    borderRadius: 8,
    width: 8,
    height: 10,
  },
  image16: {
    borderRadius: 8,
    width: 16,
    height: 16,
  },
  image17: {
    borderRadius: 8,
    width: 16,
    height: 14,
  },
  image18: {
    borderRadius: 8,
    width: 12,
    height: 14,
  },
  image19: {
    borderRadius: 8,
    width: 13,
    height: 12,
  },
  image20: {
    borderRadius: 8,
    width: 15,
    height: 12,
  },
  image21: {
    borderRadius: 8,
    width: 14,
    height: 12,
  },
  image22: {
    width: 45,
    height: 32,
    marginRight: 7,
  },
  image23: {
    borderRadius: 8,
    width: 9,
    height: 6,
    marginRight: 7,
  },
  image24: {
    width: 46,
    height: 30,
    marginRight: 7,
  },
  image25: {
    width: 45,
    height: 32,
    marginRight: 8,
  },
  image26: {
    width: 44,
    height: 31,
  },
  image27: {
    width: 44,
    height: 31,
    marginBottom: 9,
  },
  image28: {
    borderRadius: 8,
    width: 15,
    height: 15,
    marginLeft: 8,
  },
  image29: {
    borderRadius: 8,
    width: 9,
    height: 6,
    marginRight: 6,
  },
  image30: {
    borderRadius: 8,
    width: 15,
    height: 15,
    marginLeft: 8,
    marginRight: 4,
  },
  image31: {
    borderRadius: 8,
    width: 12,
    height: 12,
    marginLeft: 8,
    marginRight: 10,
  },
  image32: {
    borderRadius: 8,
    width: 19,
    height: 14,
    marginRight: 10,
  },
  image33: {
    width: 11,
    height: 7,
  },
  image34: {
    width: 1176,
    height: 30,
    marginRight: 32,
  },
  image35: {
    width: 24,
    height: 17,
    marginRight: 8,
  },
  image36: {
    width: 87,
    height: 53,
    marginRight: 16,
  },
  image37: {
    borderRadius: 8,
    width: 30,
    height: 22,
  },
  image38: {
    borderRadius: 8,
    width: 16,
    height: 24,
    marginRight: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 8,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 11,
  },
  row3: {
    width: 73,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 33,
  },
  row4: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
  },
  row5: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  row6: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 4,
  },
  row7: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
  },
  row8: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 8,
  },
  row9: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  row10: {
    flexDirection: "row",
    marginBottom: 10,
  },
  row11: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  row12: {
    flexDirection: "row",
    marginBottom: 8,
  },
  row13: {
    width: 96,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  row14: {
    width: 29,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  row15: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginHorizontal: 8,
  },
  row16: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  scrollView: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  scrollView2: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  text: {
    color: "#292929",
    fontSize: 16,
  },
  text2: {
    color: "#292929",
    fontSize: 14,
    marginBottom: 4,
  },
  text3: {
    color: "#000000",
    fontSize: 14,
    textAlign: "center",
  },
  text4: {
    color: "#292929",
    fontSize: 14,
    marginLeft: 8,
    marginRight: 12,
  },
  text5: {
    color: "#292929",
    fontSize: 14,
    marginLeft: 8,
  },
  text6: {
    color: "#000000",
    fontSize: 14,
  },
  text7: {
    color: "#292929",
    fontSize: 14,
  },
  text8: {
    color: "#292929",
    fontSize: 14,
    marginRight: 6,
  },
  text9: {
    color: "#292929",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  text10: {
    color: "#292929",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  text11: {
    color: "#903610",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    flex: 1,
  },
  view: {
    alignItems: "center",
  },
  view2: {
    width: 106,
    marginRight: 9,
  },
  view3: {
    width: 106,
  },
  view4: {
    width: 4,
    marginRight: 28,
  },
  view5: {
    width: 8,
    marginRight: 24,
  },
  view6: {
    width: 9,
    marginRight: 23,
  },
  view7: {
    width: 7,
    marginRight: 25,
  },
  view8: {
    width: 15,
    marginRight: 17,
  },
  view9: {
    width: 10,
    marginRight: 22,
  },
  view10: {
    width: 14,
    marginRight: 18,
  },
  view11: {
    width: 13,
    marginRight: 19,
  },
  view12: {
    width: 116,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 23,
  },
  view13: {
    backgroundColor: "#989898",
    borderRadius: 4,
    marginHorizontal: 16,
  },
});
