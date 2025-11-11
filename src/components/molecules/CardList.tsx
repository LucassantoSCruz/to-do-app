import { StyleSheet, Text, View } from "react-native";
import ButtonChecked from "../atoms/ButtonChecked";
import ButtonDelete from "../atoms/ButtonDelete";

type CardListProps = {
  title: string;
  id: string;
  isDone: boolean;
  onToggleDone: () => void;
  onDelete: () => void;
};

export default function CardList({
  title,
  id,
  onDelete,
  isDone,
  onToggleDone,
}: CardListProps) {
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <ButtonChecked checked={isDone} onPress={onToggleDone} />
        <Text
          style={[
            style.label,
            isDone ? { textDecorationLine: "line-through" } : null,
          ]}
        >
          {title}
        </Text>
      </View>

      <View style={style.buttonContainer}>
        <ButtonDelete onPress={onDelete} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D4D4D4",
    width: "100%",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 4,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
