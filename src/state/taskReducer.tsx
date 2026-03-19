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

    case "UPDATE_TASK":
      return [
        ...state.filter((t) =>
          t.id === action.payload.id ? action.payload : t,
        ),
      ];

    case "TOGGLE_CHECKED":
      return [
        ...state.map((t) =>
          t.id === action.payload ? { ...t, checked: !t.checked } : t,
        ),
      ];

    default:
      return state;
  }
}
