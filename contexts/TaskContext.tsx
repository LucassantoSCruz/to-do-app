import React, { createContext, ReactNode, useContext, useState } from "react";

interface TaskType {
  id: string;
  title: string;
  done: boolean;
}

interface TaskProviderProps {
  children: ReactNode;
}

interface TaskContextProps {
  tasks: TaskType[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  toggleTaskDone: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask deve ser usado dentro de um TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (title: string) => {
    const newTask = { id: Date.now().toString(), title, done: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleTaskDone }}
    >
      {children}
    </TaskContext.Provider>
  );
};
