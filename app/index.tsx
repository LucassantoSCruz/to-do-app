import ListToDo from "@/src/components/organisms/ListToDo";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.titlePage}>To Do App</Text>
      {/* <ButtonEdit />
      <ButtonDelete />
      <CardList /> */}
      <ListToDo />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9A0526",
    gap: 16,
    paddingTop: 32,
  },
  titlePage: {
    fontSize: 16,
    fontWeight: 600,
    color: "#FFFFFF",
  },
});
