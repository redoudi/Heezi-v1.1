import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image, StyleSheet } from "react-native";

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
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/qih0dnn3_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.logoStyle}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Jouer",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/play.png")}
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
              source={require("../../assets/profil.png")}
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
              source={require("../../assets/score.png")}
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
              source={require("../../assets/succes.png")}
              resizeMode="stretch"
              style={styles.tabBarItemIconImage}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    marginTop: 32,
    backgroundColor: "white",
    elevation: 0,
    shadowOpacity: 0,
    paddingTop: 93,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    width: 193,
  },
  tabBarBackgroundStyle: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: 191,
    height: 69,
    backgroundColor: "pink",
    alignSelf: "center",
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
