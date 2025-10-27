import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ExportFormatButtons() {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.buttonRow}
        onPress={() => alert("Pressed!")}
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/ceguc7fq_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <Text style={styles.text}>{".xls"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonRow2}
        onPress={() => alert("Pressed!")}
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/0a6n5ovw_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <Text style={styles.text}>{".pdf"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonRow3}
        onPress={() => alert("Pressed!")}
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/xhzm8bjz_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <Text style={styles.text}>{".docx"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonRow4}
        onPress={() => alert("Pressed!")}
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/yl2nzcpd_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <Text style={styles.text}>{".doc"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    width: 110,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  buttonRow2: {
    width: 119,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  buttonRow3: {
    width: 132,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  buttonRow4: {
    width: 119,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 56,
  },
  image: {
    borderRadius: 8,
    width: 30,
    height: 36,
    marginRight: 10,
  },
  row: {
    alignSelf: "flex-start",
    flexDirection: "row",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 16,
  },
  text: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
  },
});
