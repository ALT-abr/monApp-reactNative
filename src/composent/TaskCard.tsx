import { Pressable, StyleSheet, Text, View } from "react-native";

type TaskCardProps = {
  initials: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export default function TaskCard({
  initials,
  title,
  subtitle,
  onPress,
}: TaskCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.initialsBubble}>
          <Text style={styles.initials}>
            {initials.slice(0, 2).toUpperCase()}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>let gooo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "stretch",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    gap: 16,
    elevation: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  initialsBubble: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E7FF",
  },
  initials: {
    color: "#5146C8",
    fontSize: 16,
    fontWeight: "700",
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: "#202124",
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
    borderRadius: 12,
    backgroundColor: "#5146C8",
    paddingHorizontal: 16,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
