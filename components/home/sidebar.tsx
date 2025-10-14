import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationMenuItem } from "./navigation-menu-item";

export function Sidebar() {
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
        <View style={styles.lastMenuItem}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ROUqyFKGQX/wfgit8hu_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>{"Succès"}</Text>
        </View>
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
