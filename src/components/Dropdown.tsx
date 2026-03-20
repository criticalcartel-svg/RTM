import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type DropdownProps = {
  list: string[];
  name?: string;
  pos?: "inline" | "left" | "right";
  selected?: React.Dispatch<React.SetStateAction<string>>;
};

export default function Dropdown({
  list,
  pos = "inline",
  name = "Category",
  selected,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [select, setSelect] = useState(name);

  function handleToggle() {
    setIsOpen((opened) => !opened);
  }

  return (
    <div className="relative inline-block w-full">
      <div
        className={`flex justify-between items-center medium-size ${isOpen ? "active" : "default"}`}
        onClick={handleToggle}
      >
        <h2 className="cursor-default">{select}</h2>
        <span>
          <MdKeyboardArrowDown size={18} />
        </span>
      </div>
      {isOpen && (
        <ul
          className={`absolute ${pos} z-1 px-2 py-2 rounded-lg bg-gray-50 border border-gray-100`}
        >
          {list.map((list, i) => (
            <li
              key={i}
              className="py-1 px-2 hover:bg-blue-100 rounded-md cursor-default text-gray-600  hover:text-blue-400"
              onClick={() => {
                setSelect(list);

                if (selected) {
                  selected(list);
                }

                setIsOpen((open) => !open);
              }}
            >
              {list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
