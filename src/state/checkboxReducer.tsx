import type { Actions, Checkbox } from "../types/task";

export default function checkboxReducer(
  state: Checkbox,
  action: Actions,
): Checkbox {
  switch (action.type) {
    case "TOGGLE_CHECKED":
      return !action.payload;

    case "RESET":
      return false;

    default:
      return state;
  }
}
