import { useState } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";

import { MdArrowBackIos } from "react-icons/md";
import Input from "./Input";

export default function Container() {
  const [select, setSelect] = useState("");

  console.log(select);

  return (
    <div className="center gap-2">
      <div className="w-2xs flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <Input lable="Text" required={true} placeholder="Title" />
          <Input
            lable="Description"
            optional={true}
            placeholder="Description"
          />
        </div>
        <Dropdown
          name="Status"
          list={["Pending", "Completed", "Ongoing", "Started"]}
          selected={setSelect}
          pos="inline"
        />
        <div className=" flex gap-3">
          <Dropdown
            name="Priority"
            pos="right"
            list={["Low", "Medium", "High"]}
            selected={setSelect}
          />
          <Dropdown
            name="Category"
            pos="left"
            list={["Design", "Code", "Lifestyle"]}
            selected={setSelect}
          />
        </div>
        <div className="flex flex-row-reverse justify-between">
          <Button type="primary">Add Task</Button>

          <Button type="secondary">
            <span>
              <MdArrowBackIos />
            </span>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
