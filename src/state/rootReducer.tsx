import type { Actions, InitialState } from "../types/task";
import checkboxReducer from "./checkboxReducer";
import { inputReducer } from "./inputReducer";
import selectReducer from "./selectReducer";
import taskReducer from "./taskReducer";

export default function rootReducer(
  state: InitialState,
  action: Actions,
): InitialState {
  return {
    input: inputReducer(state.input, action),
    selected: selectReducer(state.selected, action),
    checked: checkboxReducer(state.checked, action),
    tasks: taskReducer(state.tasks, action),
  };
}
