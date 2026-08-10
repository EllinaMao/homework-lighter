import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TelegramDrawer from "../../components/drawer";

const TabLayout = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          drawerContent={(props) => <TelegramDrawer {...props} />}
          screenOptions={{
            swipeEnabled: true,
            swipeEdgeWidth: 100,
            headerShown: true,
            headerStyle: {
              backgroundColor: "#7fa3c4",
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 18,
            },
            drawerStyle: {
              width: "70%",
              // borderWidth: 0,
              borderRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              padding: 0,
              margin: 0,
            },
            drawerActiveTintColor: "#7fa3c4",
            drawerActiveBackgroundColor: "#ffffff",
            drawerLabelStyle: {
              color: "#000000",
            },
            drawerItemStyle: {
              borderRadius: 0,
              margin: 0,
            },
          }}
        >
          <Drawer.Screen
            name="films"
            options={{
              title: "New Group",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="people-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="films copy"
            options={{
              title: "Contacts",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="films copy 2"
            options={{
              title: "Calls",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="call-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="films copy 3"
            options={{
              title: "People Nearby",
              drawerIcon: ({ color, size }) => (
                <FontAwesome6 name="street-view" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="films copy 4"
            options={{
              title: "Saved Messages",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="bookmark-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="films copy 5"
            options={{
              title: "Settings",
              drawerIcon: ({ color, size }) => (
                <Feather name="settings" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="films copy 6"
            options={{
              title: "Invite Friends",
              drawerIcon: ({ color, size }) => (
                <Feather name="user-plus" size={size} color={color} />
              ),
              drawerItemStyle: {
                borderTopWidth: 1,
                borderTopColor: "#e0e0e0",
              },
            }}
          />
          <Drawer.Screen
            name="films copy 7"
            options={{
              title: "Telegram Features",
              drawerIcon: ({ color, size }) => (
                <FontAwesome6
                  name="circle-question"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default TabLayout;
