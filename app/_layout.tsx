import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping list",
          tabBarIcon: ({ color = "black", size }) => {
            return <Entypo name="list" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color = "black", size }) => {
            return <Entypo name="light-bulb" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color = "black", size }) => {
            return <Entypo name="time-slot" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
