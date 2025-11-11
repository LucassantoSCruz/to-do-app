import { useTask } from "@/contexts/TaskContext";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AddBar from "../molecules/AddBar";
import CardList from "../molecules/CardList";
import FilterToggle from "../molecules/FilterToggle";

export default function ListToDo() {
  const { tasks, removeTask, toggleTaskDone } = useTask();
  const [showDone, setShowDone] = useState<boolean | null>(null);

  const filteredTasks =
    showDone === null ? tasks : tasks.filter((task) => task.done === showDone);

  return (
    <View style={style.container}>
      <AddBar />
      <FilterToggle showDone={showDone} setShowDone={setShowDone} />
      <FlatList
        data={filteredTasks}
        renderItem={({ item }) => (
          <CardList
            id={item.id}
            title={item.title}
            isDone={item.done}
            onToggleDone={() => toggleTaskDone(item.id)}
            onDelete={() => removeTask(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 32,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
});
