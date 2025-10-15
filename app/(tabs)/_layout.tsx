import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image, StyleSheet } from "react-native";

const TabBarItemIcon = (imgSource) => (
  <Image
    source={imgSource}
    resizeMode="stretch"
    style={{ width: 48, height: 48, marginBottom: 16 }}
  />
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const heeziIconSource = require("../../assets/heezi.png");
  const playIconSource = require("../../assets/play.png");

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarPosition: "left",
        tabBarLabelStyle: {
          color: "#292929",
          fontSize: 24,
          fontWeight: "bold",
        },
        tabBarIconStyle: {
          width: 48,
          height: 48,
          marginRight: 16,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/heezi.png")}
              resizeMode="stretch"
              style={{ width: 191, height: 69, marginBottom: 32 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="jouer"
        options={{
          title: "Jouer",
          href: "/(tabs)/jouer",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/play.png")}
              resizeMode="stretch"
              style={styles.tabBarItemIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          href: "/(tabs)/profil",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/profil.png")}
              resizeMode="stretch"
              style={styles.tabBarItemIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: "Score",
          href: "/(tabs)/score",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/score.png")}
              resizeMode="stretch"
              style={styles.tabBarItemIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="succes"
        options={{
          title: "Succès",
          href: "/(tabs)/succes",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/succes.png")}
              resizeMode="stretch"
              style={styles.tabBarItemIcon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarItemIcon: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
});
