import { Tabs } from "expo-router";
import React from "react";

import { NavigationMenuItem } from "@/components/home/navigation-menu-item";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  tabBar: {
    width: 193,
    marginTop: 32,
    backgroundColor: "white",
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    // Reserve space for the logo (69) + spacing (32)
    paddingTop: 101,
    paddingBottom: 8,
  },
  tabBarBackground: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 191,
    height: 69,
    marginBottom: 32,
  },
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: "left",
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: { alignSelf: "flex-start" },
        tabBarIconStyle: { alignItems: "flex-start" },
        tabBarBackground: () => (
          <View style={styles.tabBarBackground}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/qih0dnn3_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.logo}
            />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="jouer"
        options={{
          title: "Jouer",
          href: "/(tabs)/jouer",
          tabBarIcon: () => (
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 24,
                marginLeft: 7,
              }}
            >
              <NavigationMenuItem
                imageUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/kxrsaswj_expires_30_days.png"
                label="Jouer"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          href: "/(tabs)/profil",
          tabBarIcon: () => (
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 24,
                marginLeft: 7,
              }}
            >
              <NavigationMenuItem
                imageUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/u14kpgxz_expires_30_days.png"
                label="Profil"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: "Score",
          href: "/(tabs)/score",
          tabBarIcon: () => (
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 24,
                marginLeft: 7,
              }}
            >
              <NavigationMenuItem
                imageUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/1b0ke18y_expires_30_days.png"
                label="Score"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="succes"
        options={{
          title: "Succès",
          href: "/(tabs)/succes",
          tabBarIcon: () => (
            <View
              style={{
                alignSelf: "flex-start",
                marginBottom: 24,
                marginLeft: 7,
              }}
            >
              <NavigationMenuItem
                imageUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/wfgit8hu_expires_30_days.png"
                label="Succès"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
