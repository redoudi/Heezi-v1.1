import { Tabs } from "expo-router";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { typography } from "@/styles/typography";
import { Image, StyleSheet, View, useWindowDimensions } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions();
  const isCompact = width < 768;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarPosition: isCompact ? "bottom" : "left",
        tabBarStyle: [
          styles.tabBarStyle,
          isCompact && styles.tabBarStyleCompact,
        ],
        tabBarItemStyle: [
          styles.tabBarItemStyle,
          isCompact && styles.tabBarItemStyleCompact,
        ],
        tabBarIconStyle: [
          styles.tabBarIconStyle,
          isCompact && styles.tabBarIconStyleCompact,
        ],
        tabBarLabelStyle: [
          typography.headline,
          styles.tabBarLabelStyle,
          isCompact && styles.tabBarLabelStyleCompact,
        ],
        tabBarBackground: () =>
          isCompact ? (
            <View />
          ) : (
            <View>
              <Image
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
                style={styles.logoStyle}
              />
            </View>
          ),
      }}
    >
      <Tabs.Screen
        name="play"
        options={{
          title: "Jouer",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/play.png")}
              resizeMode="stretch"
              style={[
                styles.tabBarItemIconImage,
                isCompact && styles.tabBarItemIconImageCompact,
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/profil.png")}
              resizeMode="stretch"
              style={[
                styles.tabBarItemIconImage,
                isCompact && styles.tabBarItemIconImageCompact,
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: "Score",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/score.png")}
              resizeMode="stretch"
              style={[
                styles.tabBarItemIconImage,
                isCompact && styles.tabBarItemIconImageCompact,
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="succes"
        options={{
          title: "Succès",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/succes.png")}
              resizeMode="stretch"
              style={[
                styles.tabBarItemIconImage,
                isCompact && styles.tabBarItemIconImageCompact,
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "white",
    elevation: 0,
    shadowOpacity: 0,
    paddingTop: 93,
    paddingRight: 8,
    alignItems: "center",
    width: 193,
    minWidth: 193,
    maxWidth: 193,
    margin: 32,
  },
  tabBarStyleCompact: {
    paddingTop: 0,
    paddingRight: 0,
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    margin: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    height: 72,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabBarBackgroundStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: 183,
    height: 69,
  },
  tabBarItemStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 15,
  },
  tabBarItemStyleCompact: {
    marginVertical: 0,
    flexDirection: "column",
    flex: 1,
  },
  tabBarIconStyle: {
    marginRight: 14,
  },
  tabBarIconStyleCompact: {
    marginRight: 0,
    marginBottom: 4,
  },

  tabBarLabelStyle: {
    color: "black",
  },
  tabBarLabelStyleCompact: {
    color: "black",
    fontSize: 12,
  },
  tabBarItemIconImage: {
    width: 48,
    height: 48,
  },
  tabBarItemIconImageCompact: {
    width: 32,
    height: 32,
  },
});
