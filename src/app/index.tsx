import { StyleSheet, Text, View } from "react-native";
import Greeting from "../composent/Greeting";
import TaskCard from "../composent/TaskCard";

export default function App() {
  const message = "jajajajaja!";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />

      <TaskCard
        initials="AB"
        title="ALIOUAT ABDEAHMANE"
        subtitle="devloppeur fullstack jpns!?"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
});
