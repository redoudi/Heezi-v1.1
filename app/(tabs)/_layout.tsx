import { Tabs } from "expo-router";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image, StyleSheet, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarPosition: "left",
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,

        tabBarBackground: () => (
          <View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/qih0dnn3_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.logoStyle}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="play/index"
        options={{
          title: "Jouer",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/play.png")}
              resizeMode="stretch"
              style={styles.tabBarItemIconImage}
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
              style={styles.tabBarItemIconImage}
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
              style={styles.tabBarItemIconImage}
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
              style={styles.tabBarItemIconImage}
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
      <Tabs.Screen
        name="play/[practiceTool]"
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
    alignItems: "center",
    width: 193,
    minWidth: 193,
    maxWidth: 193,
    margin: 32,
  },
  tabBarBackgroundStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: 191,
    height: 69,
  },
  tabBarItemStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 15,
  },
  tabBarIconStyle: {
    marginRight: 14,
  },

  tabBarLabelStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  tabBarItemIconImage: {
    width: 48,
    height: 48,
  },
});
