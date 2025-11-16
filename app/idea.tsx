import { View, Text, StyleSheet } from "react-native";

const Idea = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Idea</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginBottom: 18,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    fontSize: 16,
  },
});

export default Idea;
