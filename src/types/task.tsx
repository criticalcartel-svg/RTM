export type TaskProps = {
  id: number;
  title: string;
  priority: string;
  date: string;
  checked: boolean;
  description: string;
};

export type InputProps = {
  title: string;
  description: string;
  date: string;
};

export type SelectProps = string;

export type Checkbox = boolean;

export type InitialState = {
  input: InputProps;
  selected: SelectProps;
  checked: Checkbox;
  tasks: TaskProps[];
};

export type TaskManagerProps = {
  state: InitialState;
  dispatch: React.ActionDispatch<[action: Actions]>;
};

export type Actions =
  | { type: "SET_INPUT"; payload: Partial<InputProps> }
  | { type: "SET_PRIORITY"; payload: string }
  | { type: "TOGGLE_CHECKED"; payload: number }
  | { type: "ADD_TASK"; payload: TaskProps }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "UPDATE_TASK"; payload: TaskProps }
  | { type: "RESET" };
