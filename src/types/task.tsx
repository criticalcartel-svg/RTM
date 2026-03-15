export type TaskProps = {
  id: number;
  title: string;
  priority: string;
  date: string;
  description: string;
};

export type InputProps = {
  title: string;
  description: string;
  date: string;
};

export type SelectProps = string;

export type InitialState = {
  input: InputProps;
  selected: SelectProps;
  tasks: TaskProps[];
};

export type TaskManagerProps = {
  state: InitialState;
  dispatch: React.ActionDispatch<[action: Actions]>;
};

export type Actions =
  | { type: "SET_INPUT"; payload: Partial<InputProps> }
  | { type: "SET_PRIORITY"; payload: string }
  | { type: "ADD_TASK"; payload: TaskProps }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "RESET" };
