import { Link } from "react-router";
import TaskList from "../components/TaskList";
import useTask from "../hooks/useTask";
import Button from "../atoms/Button";

export default function Task() {
  const { state } = useTask();
  const { tasks } = state;

  if (!tasks.length) {
    return (
      <div>
        <p>There are no task in here!</p>
        <Link to="/add">
          <Button buttonType="primary">Go to form</Button>
        </Link>
      </div>
    );
  }

  return (
    <ul className="flex flex-col w-1/2 gap-y-3">
      {tasks.map((task) => (
        <TaskList task={task} key={task.id} />
      ))}
    </ul>
  );
}
