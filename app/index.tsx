import { StyleSheet, TextInput, FlatList, Text, View, LayoutAnimation } from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from "../utils/storage";
import * as Haptics from "expo-haptics";


type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
  lastUpdatedTimestamp: number;
};

const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Juice", lastUpdatedTimestamp: Date.now() },
  { id: "2", name: "Coffee", lastUpdatedTimestamp: Date.now() },
  { id: "3", name: "Tea", lastUpdatedTimestamp: Date.now() },
];
const storageKey = "shoppingList";

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetchInitial = async () => {
      const data = await getFromStorage(storageKey);
      if (data) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShoppingList(data);
      } else {
        setShoppingList(initialList);
      }
    }
    fetchInitial();
  }, []);
  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        {
          id: Date.now().toString(),
          name: value,
          lastUpdatedTimestamp: Date.now(),
        },
        ...shoppingList,
      ];
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setShoppingList(newShoppingList);
      setValue("");
    }
  };
  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        if (item.completedAtTimestamp) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          return {
            ...item,
            completedAtTimestamp: undefined,
            lastUpdatedTimestamp: Date.now(),
          };
        } else {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          return {
            ...item,
            completedAtTimestamp: Date.now(),
            lastUpdatedTimestamp: Date.now(),
          };
        }
      }
      return item;
    });
    saveToStorage(storageKey, newShoppingList);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShoppingList(newShoppingList);
  };
  const HandleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setShoppingList(newShoppingList);
  };
  return (
    <FlatList
      data={orderShoppingList(shoppingList)}
      ListEmptyComponent={
        <View style={styles.listEmptyText}>
          <Text>Your shopping list is empty. Add items to get started!</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          value={value}
          style={styles.textInput}
          onChangeText={setValue}
          placeholder="E.g Coffee"
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
        />
      }
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => {
        return (
          <ShoppingListItem
            isCompleted={Boolean(item.completedAtTimestamp)}
            name={item.name}
            onDelete={() => HandleDelete(item.id)}
            onToggleComplete={() => handleToggleComplete(item.id)}
          />
        );
      }}
    />
  );
}

function orderShoppingList(shoppingList: ShoppingListItemType[]) {
  return shoppingList.sort((item1, item2) => {
    if (item1.completedAtTimestamp && item2.completedAtTimestamp) {
      return item2.completedAtTimestamp - item1.completedAtTimestamp;
    }

    if (item1.completedAtTimestamp && !item2.completedAtTimestamp) {
      return 1;
    }

    if (!item1.completedAtTimestamp && item2.completedAtTimestamp) {
      return -1;
    }

    if (!item1.completedAtTimestamp && !item2.completedAtTimestamp) {
      return item2.lastUpdatedTimestamp - item1.lastUpdatedTimestamp;
    }

    return 0;
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    fontSize: 18,
    borderRadius: 50,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  listEmptyText: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
