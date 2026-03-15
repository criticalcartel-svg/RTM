import { input } from "../constants/Initials";
import type { Actions, InputProps } from "../types/task";

export function inputReducer(state: InputProps, action: Actions): InputProps {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, ...action.payload };

    case "RESET":
      return input;

    default:
      return state;
  }
}
