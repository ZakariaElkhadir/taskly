import { StyleSheet, TextInput, FlatList, Text, View } from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { Link } from "expo-router";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
};

const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Juice" },
  { id: "2", name: "Coffee" },
  { id: "3", name: "Tea" },
];

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: Date.now().toString(), name: value },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };
  const handleToggleComplete = (id:string) =>{
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        if (item.completedAtTimestamp) {
          return { ...item, completedAtTimestamp: undefined };
        } else {
          return { ...item, completedAtTimestamp: Date.now() };
        }
      }
      return item;
    });
    setShoppingList(newShoppingList);
  }
  const HandleDelete = (id:string) =>{
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
  }
  return (
    <FlatList
      data={shoppingList}
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
        return <ShoppingListItem isCompleted={Boolean(item.completedAtTimestamp)} name={item.name} onDelete={() => HandleDelete(item.id)} onToggleComplete={() => handleToggleComplete(item.id)} />;
      }}
    />
  );
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
