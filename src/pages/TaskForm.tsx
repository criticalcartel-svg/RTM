import type { ChangeEvent } from "react";
import Button from "../atoms/Button";
import Form from "../atoms/Form";
import Input from "../atoms/Input";
import Options from "../atoms/Options";
import Select from "../atoms/Select";
import { priority } from "../constants/Priority";
import useTask from "../hooks/useTask";
import type { TaskProps } from "../types/task";
import { useNavigate } from "react-router";

export default function TaskForm() {
  const Navigation = useNavigate();
  const { state, dispatch } = useTask();
  const { input, selected } = state;

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.title || !input.date) return;

    const newTask: TaskProps = {
      id: Date.now() * Math.random(),
      title: input.title,
      description: input.description,
      priority: selected,
      date: input.date,
      checked: false,
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
    dispatch({ type: "RESET" });
  }
  return (
    // <div className="form-container">
    <div className="flex justify-center items-center w-screen h-screen">
      <Form
        className="flex flex-col gap-4 w-1/4 h-fit bg-gray-100 py-8 px-8 rounded-3xl"
        onSubmit={handleSubmit}
      >
        <h1>Add Your Task</h1>
        <Input
          type="text"
          name="title"
          placeholder="Task Name"
          lable="Title"
          value={state.input.title}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT", payload: { title: e.target.value } })
          }
        />
        <Select
          className="input"
          lable="Priority"
          name="priority"
          value={selected}
          onChange={(e) =>
            dispatch({ type: "SET_PRIORITY", payload: e.target.value })
          }
        >
          {priority.map((list, i) => (
            <Options value={list} key={i} />
          ))}
        </Select>

        <Input
          type="text"
          name="description"
          placeholder="Task Description"
          lable="Description"
          value={input.description}
          onChange={(e) =>
            dispatch({
              type: "SET_INPUT",
              payload: { description: e.target.value },
            })
          }
        />
        <Input
          type="date"
          lable="Due Date"
          value={input.date}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT", payload: { date: e.target.value } })
          }
        />
        <div className="flex flex-row-reverse justify-between">
          <Button buttonType="primary">Add</Button>
          <Button buttonType="secondary" onClick={() => Navigation(-1)}>
            Back
          </Button>
        </div>
      </Form>
    </div>
    // </div>
  );
}
