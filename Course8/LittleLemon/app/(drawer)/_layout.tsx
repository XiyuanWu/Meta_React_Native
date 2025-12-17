import { Drawer } from "expo-router/drawer";
// import { Text, View } from "react-native";
import "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "About",
          title: "About",
        }}
      />
      <Drawer.Screen
        name="menu"
        options={{
          drawerLabel: "Menu",
          title: "Menu",
        }}
      />
      <Drawer.Screen
        name="reserve"
        options={{
          drawerLabel: "Reserve",
          title: "Reserve",
        }}
      />
      <Drawer.Screen
        name="subscribe"
        options={{
          drawerLabel: "Subscribe",
          title: "Subscribe",
        }}
      />
      <Drawer.Screen
        name="logout"
        options={{
          title: "Log out",
          drawerLabel: "Log out", 
          drawerItemStyle: {
            backgroundColor: "#f44336",
            borderRadius: 15,
            marginHorizontal: 16,
            marginTop: 20,
            height: 40,
            paddingVertical: 0,
          },
          drawerLabelStyle: {
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            justifyContent: "center",
            lineHeight: 13,
            paddingBottom: 3,
          },
        }}
      />
    </Drawer>
  );
}
