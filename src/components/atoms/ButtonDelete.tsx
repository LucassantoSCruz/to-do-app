import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconDelete } from "./Icons";

export default function ButtonDelete() {
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <IconDelete />
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
