import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "./List";
import Map from "./Map";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#6610f2",
          bottom: 0,
          position: "absolute",
          justifyContent: "center",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/list.png")}
              resizeMode="contain"
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/map.png")}
              resizeMode="contain"
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },
});
export default Tabs;
