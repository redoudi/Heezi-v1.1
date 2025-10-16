import { Tabs } from "expo-router";
import React from "react";

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
          <View style={styles.tabBarBackgroundStyle}>
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
          href: "/(tabs)/profil",
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
          href: "/(tabs)/score",
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
          href: "/(tabs)/succes",
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
    width: 193,
    marginTop: 32,
    backgroundColor: "white",
    elevation: 0,
    shadowOpacity: 0,
    paddingTop: 101,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
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
  },
  tabBarItemStyle: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingBottom: 24,
  },
  tabBarIconStyle: {
    width: 48,
    height: 48,
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
