import Button from "../atoms/Button";
import Input from "../atoms/Input";
import useTask from "../hooks/useTask";
import type { TaskProps } from "../types/task";

export default function TaskList({ task }: TaskListProps) {
  const { dispatch } = useTask();
  return (
    <>
      <div className="flex gap-y-3 justify-between">
        <div className="flex gap-3 items-center">
          <Input
            type="checkbox"
            checked={task.checked}
            onChange={() =>
              dispatch({ type: "TOGGLE_CHECKED", payload: task.id })
            }
          />
          <div className="flex gap-4 justify-center items-center">
            <li>{task.title}</li>
            <li>{task.description}</li>
            <li>{task.priority}</li>
            <li>{task.date}</li>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            buttonType="secondary"
            onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
          >
            Delete
          </Button>
          <Button
            buttonType="primary"
            onClick={() => {
              dispatch({ type: "UPDATE_TASK", payload: task });
              console.log("submitted");
            }}
          >
            ⁘
          </Button>
        </div>
      </div>
    </>
  );
}

type TaskListProps = { task: TaskProps };
