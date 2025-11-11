import { useTask } from "@/contexts/TaskContext";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import ButtonAdd from "../atoms/ButtonAdd";

export default function AddBar() {
  const [title, setTitle] = useState("");
  const { addTask } = useTask();

  const handleAdd = () => {
    addTask(title);
    console.log("Task adicionada: " + title);
    setTitle("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        value={title}
        onChangeText={setTitle}
      />
      <ButtonAdd onPress={handleAdd} />
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
