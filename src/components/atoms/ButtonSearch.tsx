import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconSearch } from "./Icons";

export default function ButtonSearch() {
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <IconSearch />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F3",
    padding: 12,
    borderRadius: 4,
  },
});
