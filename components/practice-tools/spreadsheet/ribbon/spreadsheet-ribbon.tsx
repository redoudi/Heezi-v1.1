import useSpreadsheetRibbon from "@/hooks/useSpreadsheetRibbon";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../spreadsheet-styles";

function BoldButton() {
  const ribbonCallbacks = useSpreadsheetRibbon();
  const { isSelectedCellBold, boldSelectedCell } = useSpreadsheetRibbon();
  return (
    <TouchableOpacity
      // bold button
      style={[
        styles.button13,
        isSelectedCellBold ? { borderColor: "black", borderWidth: 1 } : {},
      ]}
      onPress={() => boldSelectedCell()}
    >
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/grsf2bb1_expires_30_days.png",
        }}
        resizeMode={"stretch"}
        style={styles.image13}
      />
    </TouchableOpacity>
  );
}

export default function Ribbon() {
  return (
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
            <BoldButton />
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
  );
}
