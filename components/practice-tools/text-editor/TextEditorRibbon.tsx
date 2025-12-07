import RibbonMobile from "@/components/practice-tools/RibbonMobile";
import BoldButton from "@/components/practice-tools/spreadsheet/BoldButton";
import VerticalDivider from "@/components/practice-tools/VerticalDivider";
import { isMobile } from "@/utils/isMobile";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./TextEditorRibbonStyles";

function IconButton({ iconSource }) {
  return (
    <TouchableOpacity style={styles.buttonMd} onPress={() => {}} disabled>
      <Image
        source={iconSource}
        resizeMode={"contain"}
        style={styles.buttonIconMd}
      />
    </TouchableOpacity>
  );
}

function SectionPressePapiers() {
  return (
    <View style={styles.section}>
      <View style={[styles.sectionContent, { gap: 8 }]}>
        <TouchableOpacity
          style={styles.verticalButton}
          onPress={() => {}}
          disabled
        >
          <Image
            source={require("@/assets/images/coller.png")}
            resizeMode={"contain"}
            style={styles.iconBig}
          />
          <Text style={styles.text}>{"Coller"}</Text>
          <Image
            source={require("@/assets/images/down-arrow.png")}
            resizeMode={"contain"}
            style={styles.downArrow}
          />
        </TouchableOpacity>
        <View style={styles.buttonColumn}>
          <TouchableOpacity
            style={styles.buttonBase}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/cut.png")}
              resizeMode={"contain"}
              style={styles.iconMd}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBase}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/clipboard.png")}
              resizeMode={"contain"}
              style={styles.iconMd}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sectionTitle}>{"Presse-papiers"}</Text>
    </View>
  );
}

function SectionPolice() {
  return (
    <View style={styles.section}>
      <View style={styles.sectionGrid}>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[styles.buttonDropdown, { width: isMobile ? 100 : 241 }]}
            onPress={() => {}}
            disabled
          >
            <Text style={styles.text}>{"Police"}</Text>
            <Image
              source={require("@/assets/images/uig4w09q_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.downArrow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonDropdown, { width: 73 }]}
            onPress={() => {}}
            disabled
          >
            <Text style={styles.text}>{"12"}</Text>
            <Image
              source={require("@/assets/images/7bw6obmu_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.downArrow}
            />
          </TouchableOpacity>
          <VerticalDivider />
          <TouchableOpacity
            style={[styles.buttonDropdown, { width: 55 }]}
            onPress={() => {}}
            disabled
          >
            <Text style={styles.text}>{"A a"}</Text>
            <Image
              source={require("@/assets/images/rjnwoeo6_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.downArrow}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          <BoldButton />
          <TouchableOpacity
            style={styles.buttonSmall}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/djgcsw86_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSmall}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/yn5b2k86_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSmall}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/k9vx5ycz_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSmall}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/n12ta229_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSmall}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/1awwjlw7_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <VerticalDivider />
          <TouchableOpacity
            style={styles.buttonSmall}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/lrwrll0x_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSmall}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/zvx6kr6l_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSmall}
            onPress={() => {}}
            disabled
          >
            <Image
              source={require("@/assets/images/zcd58amp_expires_30_days.png")}
              resizeMode={"contain"}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sectionTitle}>{"Police"}</Text>
    </View>
  );
}

function SectionParagraphe() {
  return (
    <View style={styles.section}>
      <View style={styles.sectionGrid}>
        <View style={styles.buttonsRow}>
          <IconButton
            iconSource={require("@/assets/images/bulletPoints.png")}
          />
          <IconButton
            iconSource={require("@/assets/images/numberedList.png")}
          />
          <IconButton
            iconSource={require("@/assets/images/numberedtablist.png")}
          />
          <VerticalDivider />
          <IconButton
            iconSource={require("@/assets/images/xhij6qe3_expires_30_days.png")}
          />
          <IconButton
            iconSource={require("@/assets/images/m8i25506_expires_30_days.png")}
          />
          <VerticalDivider />
          <IconButton
            iconSource={require("@/assets/images/qsucqhf4_expires_30_days.png")}
          />
          <VerticalDivider />
          <IconButton
            iconSource={require("@/assets/images/f5tsg9ts_expires_30_days.png")}
          />
        </View>
        <View style={styles.buttonsRow}>
          <IconButton
            iconSource={require("@/assets/images/ce74949l_expires_30_days.png")}
          />
          <IconButton
            iconSource={require("@/assets/images/mk84bjzk_expires_30_days.png")}
          />
          <IconButton
            iconSource={require("@/assets/images/wnui27r7_expires_30_days.png")}
          />
          <IconButton
            iconSource={require("@/assets/images/x1fh47wq_expires_30_days.png")}
          />

          <IconButton
            iconSource={require("@/assets/images/paragraphSpacing.png")}
          />
        </View>
      </View>
      <Text style={styles.text7}>{"Paragraphe"}</Text>
    </View>
  );
}

function SectionStyles() {
  return (
    <View style={styles.section}>
      <View style={styles.row10}>
        <View style={styles.row11}>
          <TouchableOpacity style={styles.button28} onPress={() => {}} disabled>
            <Text style={styles.text8}>{"Normal"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button29} onPress={() => {}} disabled>
            <Text style={styles.text9}>{"Titre 1"}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button30} onPress={() => {}} disabled>
          <Image
            source={require("@/assets/images/n981r9bx_expires_30_days.png")}
            resizeMode={"contain"}
            style={styles.image28}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text7}>{"Styles"}</Text>
    </View>
  );
}

function SectionEdition() {
  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.buttonColumn2}
        onPress={() => {}}
        disabled
      >
        <Image
          source={require("@/assets/images/dpfumd98_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.image29}
        />
        <Text style={styles.text10}>{"édition"}</Text>
        <Image
          source={require("@/assets/images/8h776a6o_expires_30_days.png")}
          resizeMode={"contain"}
          style={styles.downArrow}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function TextEditorRibbon() {
  return isMobile ? <RibbonMobile /> : <RibbonDesktop />;
}

function RibbonDesktop() {
  return (
    <View style={styles.mainContainer}>
      <SectionPressePapiers />
      <VerticalDivider />
      <SectionPolice />
      <VerticalDivider />
      {/*all images ok until here*/}
      <SectionParagraphe />
      <VerticalDivider />
      <SectionStyles />
      <SectionEdition />
    </View>
  );
}
