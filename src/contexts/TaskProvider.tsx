import { useReducer, type ReactNode } from "react";
import { TaskContext } from "./TaskContext";
import rootReducer from "../state/rootReducer";
import { initialState } from "../constants/Initials";

export default function TaskProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return <TaskContext value={{ state, dispatch }}>{children}</TaskContext>;
}
