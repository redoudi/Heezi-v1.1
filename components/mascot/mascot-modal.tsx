import { Modal, StyleSheet, View } from "react-native";
import MascotModalComponent from "./mascot-modal-component";

export default function MascotModal() {
  return (
    <Modal
      visible={true}
      transparent
      animationType="fade"
      onRequestClose={() => {
        console.log("close");
      }}
    >
      <View style={styles.container}>
        <MascotModalComponent />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
