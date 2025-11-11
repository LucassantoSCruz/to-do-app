import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconAdd } from "./Icons";

interface BotaoProps {
  onPress: () => void;
}

export default function ButtonAdd({ onPress }: BotaoProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.container}>
        <IconAdd />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#9A0526",
    padding: 12,
    borderRadius: 4,
  },
});
