import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconEdit } from "./Icons";

export default function ButtonEdit() {
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <IconEdit />
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
