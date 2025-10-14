import { Tabs } from "expo-router";
import React from "react";

import { NavigationMenuItem } from "@/components/home/navigation-menu-item";
import { Image, Pressable, StyleSheet, View } from "react-native";

function SidebarTabBar({ state, navigation }: any) {
  const items = [
    {
      name: "jouer",
      imageUri:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/kxrsaswj_expires_30_days.png",
      label: "Jouer",
    },
    {
      name: "profil",
      imageUri:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/u14kpgxz_expires_30_days.png",
      label: "Profil",
    },
    {
      name: "score",
      imageUri:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/1b0ke18y_expires_30_days.png",
      label: "Score",
    },
    {
      name: "succes",
      imageUri:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/wfgit8hu_expires_30_days.png",
      label: "Succès",
    },
  ];

  return (
    <View style={styles.sidebar}>
      <Image
        source={{
          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/qih0dnn3_expires_30_days.png",
        }}
        resizeMode="stretch"
        style={styles.logo}
      />
      <View style={styles.menuContainer}>
        {items.map((item) => {
          const isFocused = state?.routes?.[state.index]?.name === item.name;
          return (
            <Pressable
              key={item.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={() => navigation.navigate(item.name)}
              style={{ alignSelf: "flex-start" }}
            >
              <NavigationMenuItem imageUri={item.imageUri} label={item.label} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <SidebarTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarPosition: "left",
        tabBarStyle: {
          backgroundColor: "transparent",
          borderRightWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="jouer"
        options={{
          title: "Jouer",
          href: "/(tabs)/jouer",
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          href: "/(tabs)/profil",
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: "Score",
          href: "/(tabs)/score",
        }}
      />
      <Tabs.Screen
        name="succes"
        options={{
          title: "Succès",
          href: "/(tabs)/succes",
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
const styles = StyleSheet.create({
  sidebar: {
    width: 193,
    alignItems: "center",
    marginTop: 32,
    marginLeft: 31,
  },
  logo: {
    width: 191,
    height: 69,
    marginBottom: 32,
  },
  menuContainer: {
    paddingVertical: 8,
  },
});
