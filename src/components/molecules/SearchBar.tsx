import { StyleSheet, TextInput, View } from "react-native";
import ButtonSearch from "../atoms/ButtonSearch";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <ButtonSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  input: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D4D4D4",
    marginBottom: 12,
    alignItems: "center",
    paddingHorizontal: 8,
    height: 48,
    width: "85%",
  },
});
