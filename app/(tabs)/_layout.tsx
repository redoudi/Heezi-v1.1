import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

import { NavigationMenuItem } from "@/components/home/navigation-menu-item";
import { Image, StyleSheet, Text, View } from "react-native";

const menuItems = [
  {
    imageUri:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/kxrsaswj_expires_30_days.png",
    label: "Jouer",
  },
  {
    imageUri:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/u14kpgxz_expires_30_days.png",
    label: "Profil",
  },
  {
    imageUri:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/1b0ke18y_expires_30_days.png",
    label: "Score",
  },
];

function LastMenuItem({
  imageUri,
  label,
}: {
  imageUri: string;
  label: string;
}) {
  return (
    <View style={styles.lastMenuItem}>
      <Image
        source={{ uri: imageUri }}
        resizeMode="stretch"
        style={styles.menuIcon}
      />
      <Text style={styles.menuText}>{label}</Text>
    </View>
  );
}

function Sidebar() {
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
        {menuItems.map((item, index) => (
          <NavigationMenuItem
            key={index}
            imageUri={item.imageUri}
            label={item.label}
          />
        ))}
        <LastMenuItem
          imageUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/wfgit8hu_expires_30_days.png"
          label="Succès"
        />
      </View>
    </View>
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
  menuIcon: {
    borderRadius: 8,
    width: 48,
    height: 48,
    marginRight: 16,
  },
  menuText: {
    color: "#292929",
    fontSize: 24,
    fontWeight: "bold",
  },
  lastMenuItem: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 7,
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarPosition: "left",
        tabBarStyle: {
          width: 80,
          height: "100%",
          flexDirection: "column",
          paddingVertical: 20,
        },
        tabBarItemStyle: {
          flexDirection: "column",
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
