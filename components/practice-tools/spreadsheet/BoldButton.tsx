import useCursor from "@/context/useCursor";
import usePracticeToolConstants from "@/hooks/usePracticeToolConstants";
import { useSpreadsheetRibbon } from "@/hooks/useSpreadsheet";
import useTextEditorRibbon from "@/hooks/useTextEditorRibbon";
import { useEffect, useRef } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function BoldButton() {
  const { practiceTool } = usePracticeToolConstants();
  return practiceTool === "spreadsheet" ? (
    <BoldButtonSpreadsheet />
  ) : (
    <BoldButtonTextEditor />
  );
}

function BoldButtonSpreadsheet() {
  const { isSelectedCellBold, boldSelectedCell } = useSpreadsheetRibbon();
  return (
    <BoldButtonBody isBold={isSelectedCellBold} onPress={boldSelectedCell} />
  );
}

function BoldButtonTextEditor() {
  const { isSelectedBlockBold, boldSelectedBlock } = useTextEditorRibbon();
  return (
    <BoldButtonBody isBold={isSelectedBlockBold} onPress={boldSelectedBlock} />
  );
}

function BoldButtonBody({
  isBold,
  onPress,
}: {
  isBold: boolean;
  onPress: () => void;
}) {
  const { setContentRef } = useCursor();
  const boldButtonRef = useRef<any>(null);
  useEffect(() => {
    if (setContentRef && boldButtonRef) {
      setContentRef("boldButton", boldButtonRef);
    }
  }, [setContentRef, boldButtonRef]);
  return (
    <TouchableOpacity
      // bold button
      style={[
        styles.mainContainer,
        isBold ? { borderColor: "black", borderWidth: 1 } : {},
      ]}
      onPress={onPress}
      ref={boldButtonRef}
    >
      <Image
        source={require("@/assets/images/grsf2bb1_expires_30_days.png")}
        resizeMode={"contain"}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 10,
  },
  mainContainer: {
    width: 23,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    padding: 8,
  },
});
