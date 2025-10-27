import { StyleSheet, Text, View } from "react-native";
import ButtonDelete from "../atoms/ButtonDelete";
import ButtonEdit from "../atoms/ButtonEdit";

type CardListProps = {
  title: string;
};

export default function CardList({ title }: CardListProps) {
  return (
    <View style={style.container}>
      <Text style={style.textContainer}>{title}</Text>
      <View style={style.buttonContainer}>
        <ButtonEdit />
        <ButtonDelete />
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
  textContainer: {
    fontSize: 16,
    fontWeight: 600,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
