import { TouchableOpacity, View } from "react-native";
import { IconCheck, IconCheckBlank } from "./Icons";

type ButtonCheckedProps = {
  checked: boolean;
  onPress: () => void;
};

export default function ButtonChecked({
  checked,
  onPress,
}: ButtonCheckedProps) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        {checked ? <IconCheck /> : <IconCheckBlank />}
      </TouchableOpacity>
    </View>
  );
}
