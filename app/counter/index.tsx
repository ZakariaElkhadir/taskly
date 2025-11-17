import { Text, View, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native";
import { theme } from "../../theme";
import * as Notifications from "expo-notifications";


export default function CounterScreen() {
  const scheduleNotification = async () => {
    try {
      // Set up notification channel for Android
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
          vibrationPattern: [0, 250, 250, 250],
          showBadge: false,
        });
      }

      // Request permissions
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus === "granted") {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "I'm a notification from your app! 📨",
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
            seconds: 5,
          },
        });
        Alert.alert("Success", "Notification scheduled for 5 seconds from now!");
      } else {
        Alert.alert(
          "Unable to schedule notification",
          "Enable the notifications permission for Expo Go in settings",
        );
      }
    } catch (error) {
      console.error("Notification error:", error);
      Alert.alert("Error", "Failed to schedule notification");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={scheduleNotification}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Schedule notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
