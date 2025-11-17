import React from "react";
import * as Haptics from "expo-haptics";
import {
  StyleSheet,
  Text,
  Pressable,
  Alert,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../theme";
import CloseCircleIcon from "./CloseCircleIcon";
import { Entypo } from "@expo/vector-icons";

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};
export default function ShoppingListItem({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: Props) {
  const HandleDelete = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
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
    <Pressable
      onPress={onToggleComplete}
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : null,
      ]}
    >
      <View style={styles.itemContent}>
        <View
          style={[
            styles.checkboxContainer,
            isCompleted ? styles.checkboxCompleted : null,
          ]}
        >
          {isCompleted && (
            <Entypo
              name="check"
              size={20}
              color={theme.colorWhite}
            />
          )}
        </View>
        <Text
          style={[styles.itemText, isCompleted ? styles.completedText : null]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={HandleDelete}
        activeOpacity={0.8}
        style={styles.deleteButton}
      >
        <CloseCircleIcon size={24} color={isCompleted ? "#aaa" : "red"} />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorLightGrey,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  completedContainer: {
    backgroundColor: "#f5f5f5",
    borderBottomColor: "#e0e0e0",
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkboxContainer: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.colorCerulean,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxCompleted: {
    backgroundColor: theme.colorCerulean,
    borderColor: theme.colorCerulean,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "400",
    color: theme.colorBlack,
    flex: 1,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: theme.colorGray,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
});
