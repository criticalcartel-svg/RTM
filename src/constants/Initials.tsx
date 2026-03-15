import type { InitialState, InputProps } from "../types/task";

export const input: InputProps = {
  title: "",
  description: "",
  date: "",
};

export const initialState: InitialState = {
  input: {
    title: "",
    description: "",
    date: "",
  },
  selected: "",
  tasks: [],
};
