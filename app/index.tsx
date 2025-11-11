import { TaskProvider } from "@/contexts/TaskContext";
import HomePage from "@/src/pages/HomeScreen";

export default function App() {
  return (
    <TaskProvider>
      <HomePage />
    </TaskProvider>
  );
}
