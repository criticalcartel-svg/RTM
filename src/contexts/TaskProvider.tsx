import { useEffect, useReducer, type ReactNode } from "react";
import { TaskContext } from "./TaskContext";
import rootReducer from "../state/rootReducer";
import { initialState } from "../constants/Initials";

export default function TaskProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(rootReducer, initialState, (initial) => {
    try {
      const savedTask = localStorage.getItem("tasks");
      return savedTask ? JSON.parse(savedTask) : initial;
    } catch (error) {
      console.error(error);
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);
  return <TaskContext value={{ state, dispatch }}>{children}</TaskContext>;
}
