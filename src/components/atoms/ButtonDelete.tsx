import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconDelete } from "./Icons";

type ButtonDeleteProps = {
  onPress: () => void;
};

export default function ButtonDelete({ onPress }: ButtonDeleteProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.container}>
        <IconDelete />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 4,
  },
});
