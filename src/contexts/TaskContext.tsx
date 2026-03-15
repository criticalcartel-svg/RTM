import { createContext } from "react";
import type { TaskManagerProps } from "../types/task";

export const TaskContext = createContext<TaskManagerProps | undefined>(
  undefined,
);
