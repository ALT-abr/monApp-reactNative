import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const message = "Hello World !";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});
