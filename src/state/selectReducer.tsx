import type { Actions, SelectProps } from "../types/task";

export default function selectReducer(
  state: SelectProps,
  action: Actions,
): SelectProps {
  switch (action.type) {
    case "SET_PRIORITY":
      return action.payload;

    case "RESET":
      return "";

    default:
      return state;
  }
}
