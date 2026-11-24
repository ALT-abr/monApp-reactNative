import { StyleSheet, Text, View } from "react-native";

export default function greeting() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Salut ! Aujourd’hui, if fait GREAT 😄</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  message: { fontSize: 16, textAlign: "center" },
});
