import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type FilterToggleProps = {
  showDone: boolean | null;
  setShowDone: (value: boolean | null) => void;
};

export default function FilterToggle({
  showDone,
  setShowDone,
}: FilterToggleProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, showDone === null ? styles.activeButton : null]}
        onPress={() => setShowDone(null)}
      >
        <Text>Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, showDone === true ? styles.activeButton : null]}
        onPress={() => setShowDone(true)}
      >
        <Text>Feitos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, showDone === false ? styles.activeButton : null]}
        onPress={() => setShowDone(false)}
      >
        <Text>Não feitos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
  },
  activeButton: {
    backgroundColor: "#FFF",
  },
});
