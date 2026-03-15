import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function useTask() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used inside a TaskProvider");
  }

  return context;
}
