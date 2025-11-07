import useTextEditorRibbon from "@/hooks/useTextEditorRibbon";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../ui/back-button";

function BoldButton() {
  const { isSelectedBlockBold, boldSelectedBlock } = useTextEditorRibbon();

  return (
    <TouchableOpacity
      style={[
        styles.button13,
        isSelectedBlockBold ? { borderColor: "black", borderWidth: 1 } : {},
      ]}
      onPress={() => boldSelectedBlock()}
    >
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/2ib5w9m2_expires_30_days.png",
        }}
        resizeMode={"stretch"}
        style={[styles.image13]}
      />
    </TouchableOpacity>
  );
}

export default function TextEditorHeader() {
  return (
    <View style={styles.column2}>
      <View style={styles.row}>
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/f36dtxie_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/x1cberci_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image2}
        />
        <Image
          source={require("@/assets/images/1tMFzp8.png")}
          resizeMode={"stretch"}
          style={styles.image3}
        />
        <Image
          source={require("@/assets/images/1tMFzp8.png")}
          resizeMode={"stretch"}
          style={styles.image4}
        />
        <BackButton />
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ufeyprsl_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/v82hp4b9_expires_30_days.png",
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
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/brtm7hpr_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image8}
              />
              <Text style={styles.text2}>{"Coller"}</Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/oluhu4b3_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/r2e2a79p_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/183ucgvf_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/uig4w09q_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/7bw6obmu_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image12}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonRow3}
                onPress={() => alert("Pressed!")}
              >
                <Text style={styles.text6}>{"A a"}</Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/rjnwoeo6_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image12}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.row7}>
              <BoldButton />
              <TouchableOpacity
                style={styles.button14}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/djgcsw86_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/yn5b2k86_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/k9vx5ycz_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/n12ta229_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/1awwjlw7_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image17}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button19}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/lrwrll0x_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image18}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button20}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/zvx6kr6l_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image6}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button21}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/zcd58amp_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image19}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text7}>{"Police"}</Text>
        </View>
        <View style={styles.column7}>
          <View style={styles.column8}>
            <View style={styles.row8}>
              <Image
                source={require("@/assets/images/1tMFzp8.png")}
                resizeMode={"stretch"}
                style={styles.image20}
              />
              <Image
                source={require("@/assets/images/1tMFzp8.png")}
                resizeMode={"stretch"}
                style={styles.image20}
              />
              <Image
                source={require("@/assets/images/1tMFzp8.png")}
                resizeMode={"stretch"}
                style={styles.image21}
              />
              <TouchableOpacity
                style={styles.button22}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/xhij6qe3_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image22}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button23}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/m8i25506_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image22}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button23}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/qsucqhf4_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image23}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button24}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/f5tsg9ts_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image24}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.row9}>
              <TouchableOpacity
                style={styles.button25}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ce74949l_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image25}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button26}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/mk84bjzk_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image26}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button25}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/wnui27r7_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image25}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button27}
                onPress={() => alert("Pressed!")}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/x1fh47wq_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={styles.image22}
                />
              </TouchableOpacity>
              <Image
                source={require("@/assets/images/1tMFzp8.png")}
                resizeMode={"stretch"}
                style={styles.image27}
              />
            </View>
          </View>
          <Text style={styles.text7}>{"Paragraphe"}</Text>
        </View>
        <View style={styles.column9}>
          <View style={styles.row10}>
            <View style={styles.row11}>
              <TouchableOpacity
                style={styles.button28}
                onPress={() => alert("Pressed!")}
              >
                <Text style={styles.text8}>{"Normal"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button29}
                onPress={() => alert("Pressed!")}
              >
                <Text style={styles.text9}>{"Titre 1"}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button30}
              onPress={() => alert("Pressed!")}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/n981r9bx_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={styles.image28}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text7}>{"Styles"}</Text>
        </View>
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.buttonColumn2}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/dpfumd98_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image29}
            />
            <Text style={styles.text10}>{"édition"}</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/8h776a6o_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={styles.image9}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginRight: 10,
  },
  button16: {
    width: 32,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
  },
  button17: {
    width: 27,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 11,
  },
  button18: {
    width: 27,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 21,
  },
  button19: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 10,
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
  button20: {
    width: 33,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 7,
    marginRight: 10,
  },
  button21: {
    width: 28,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button22: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 4,
  },
  button23: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button24: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  button25: {
    width: 30,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button26: {
    width: 29,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button27: {
    width: 31,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 16,
  },
  button28: {
    width: 113,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 20,
    marginHorizontal: 8,
  },
  button29: {
    width: 113,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 17,
  },
  button3: {
    width: 130,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    marginRight: 8,
  },
  button30: {
    width: 43,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    paddingVertical: 27,
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
  buttonColumn: {
    width: 54,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  buttonColumn2: {
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
  },
  buttonRow: {
    width: 241,
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
    marginRight: 20,
  },
  buttonRow3: {
    width: 55,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
  },
  column2: {
    marginBottom: 27,
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
    width: 399,
    alignItems: "center",
    marginRight: 16,
  },
  column6: {
    marginBottom: 16,
  },
  column7: {
    width: 293,
    alignItems: "center",
    marginRight: 17,
  },
  column8: {
    marginBottom: 9,
  },
  column9: {
    width: 293,
    alignItems: "center",
    marginRight: 7,
  },
  image: {
    width: 38,
    height: 32,
    marginLeft: 32,
    marginRight: 8,
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
    height: 10,
  },
  image17: {
    borderRadius: 8,
    width: 11,
    height: 9,
  },
  image18: {
    borderRadius: 8,
    width: 15,
    height: 13,
  },
  image19: {
    borderRadius: 8,
    width: 12,
    height: 14,
  },
  image2: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  image20: {
    width: 44,
    height: 28,
    marginRight: 4,
  },
  image21: {
    width: 44,
    height: 28,
    marginRight: 8,
  },
  image22: {
    borderRadius: 8,
    width: 15,
    height: 12,
  },
  image23: {
    borderRadius: 8,
    width: 15,
    height: 17,
  },
  image24: {
    borderRadius: 8,
    width: 15,
    height: 14,
  },
  image25: {
    borderRadius: 8,
    width: 14,
    height: 12,
  },
  image26: {
    borderRadius: 8,
    width: 13,
    height: 12,
  },
  image27: {
    width: 49,
    height: 31,
  },
  image28: {
    width: 27,
    height: 15,
  },
  image29: {
    borderRadius: 8,
    width: 31,
    height: 31,
    marginBottom: 4,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingVertical: 8,
  },
  row10: {
    flexDirection: "row",
    marginBottom: 10,
  },
  row11: {
    width: 242,
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
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
    flexDirection: "row",
    marginBottom: 4,
  },
  row7: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  row9: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#292929",
    fontSize: 16,
  },
  text10: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 4,
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
    flex: 1,
  },
  text5: {
    color: "#292929",
    fontSize: 14,
    marginLeft: 8,
  },
  text6: {
    color: "#292929",
    fontSize: 14,
    marginLeft: 8,
    marginRight: 11,
  },
  text7: {
    color: "#000000",
    fontSize: 14,
  },
  text8: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold",
  },
  text9: {
    color: "#000000",
    fontSize: 20,
  },
  view: {
    width: 54,
    marginRight: 215,
  },
});
