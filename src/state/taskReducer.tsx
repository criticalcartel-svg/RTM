import type { Actions, TaskProps } from "../types/task";

export default function taskReducer(
  state: TaskProps[],
  action: Actions,
): TaskProps[] {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return [...state.filter((t) => t.id !== action.payload)];

    case "RESET":
      return state;

    default:
      return state;
  }
}
