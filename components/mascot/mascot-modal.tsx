import SuivantBtnModal from "@/components/ui/suivantBtnModal";
import { useEffect } from "react";
import {
  Image,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function MascotModal({ open, onClose, modalText }) {
  // Blur any focused elements when modal opens to prevent aria-hidden accessibility issues
  useEffect(() => {
    if (open && Platform.OS === "web") {
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
    }
  }, [open]);

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose} accessible={false}>
        <View style={styles.mainContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require("@/assets/images/paauqhmf_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.mascotImage}
            />
            <View style={styles.modalTextBoxContainer}>
              <View style={styles.modalTextBox}>
                <Text style={styles.modalText}>{modalText || "..."}</Text>
              </View>
              <SuivantBtnModal text="Continuer" onPress={onClose} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: 748,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingTop: 16,
    paddingBottom: 17,
    paddingLeft: 15,
    paddingRight: 16,
    alignItems: "center",
    shadowColor: "#1E6759",
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  mascotImage: {
    borderRadius: 8,
    height: 398,
    marginBottom: 8,
  },
  arrowDownImage: {
    borderRadius: 8,
    width: 32,
    height: 21,
  },
  modalText: {
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalTextBox: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 8,
    marginBottom: 8,
  },
  modalTextBoxContainer: {
    alignSelf: "stretch",
    alignItems: "stretch",
  },
});
