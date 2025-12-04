import { Tabs } from "expo-router";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Dimensions, Image, StyleSheet, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const screenWidth = Dimensions.get("window").width;
  const isMobile = screenWidth < 768; // Use bottom tab bar on screens smaller than 768px

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveBackgroundColor: "#EFEFEF", // Background color for selected tab
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarPosition: isMobile ? "bottom" : "left",
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,

        tabBarBackground: () => {
          return isMobile ? null : (
            <View style={styles.tabBarBackgroundStyle}>
              <Image
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
                style={styles.logoStyle}
              />
            </View>
          );
        },
      }}
    >
      <Tabs.Screen
        name="play"
        options={{
          title: "Jouer",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/play.png")}
              resizeMode="contain"
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
              resizeMode="contain"
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
              resizeMode="contain"
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
              resizeMode="contain"
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
    minWidth: 164,
    maxWidth: 164,
    margin: 16,
  },
  tabBarBackgroundStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    marginTop: 16,
  },
  logoStyle: {
    height: 40,
  },
  tabBarItemStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 16,
  },
  tabBarIconStyle: {
    marginRight: 8,
  },

  tabBarLabelStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  tabBarItemIconImage: {
    width: 32,
    height: 32,
  },
});
