import type { TaskProps } from "../types/task";

export const priority = ["low", "medium", "high"];

export const tasks: TaskProps = {
  id: Date.now() * Math.random(),
  date: "",
  title: "",
  priority: "",
  description: "",
};
