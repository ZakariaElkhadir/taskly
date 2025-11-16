import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { theme } from "../theme";
import CloseCircleIcon from "./CloseCircleIcon";

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
};
export default function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
}: Props) {
  const HandleDelete = () => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          onDelete();
        },
      },
    ]);
  };
  

  return (
    <ScrollView
      contentContainerStyle={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : null,
      ]}
    >
      <Text
        style={[styles.itemText, isCompleted ? styles.completedText : null]}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={HandleDelete}
        activeOpacity={0.8}
        style={
          isCompleted ? [styles.button, styles.completedButton] : styles.button
        }
        disabled={isCompleted}
      >
        <CloseCircleIcon size={24} color={isCompleted ? "#888" : "red"} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  completedButton: {
    backgroundColor: "#c0c0c0ff",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: theme.colorWhite,
  },
  completedContainer: {
    backgroundColor: theme.colorGray,
    borderBottomColor: theme.colorGray,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#8000ffff",
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  TextButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
  },
});
