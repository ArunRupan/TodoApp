/* eslint-disable react/prop-types */
import { useState } from "react";
import Completed from "./Completed";
import { MdOutlineDone } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import ConfirmDelete from "./ConfirmDelete";

export default function Task({ task, onChange, onDelete }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="m-3 relative border rounded-md">
      <div className="text-left">
        {task.done && (
          <Completed task={task} onChange={onChange} onDelete={onDelete} />
        )}
        <h4 className="p-3 text-xl">{task.text}</h4>
      </div>
      <p className="m-3 text-left overflow-x-clip">{task.description}</p>
      <div className="flex">
        <button
          onClick={() => onChange({ ...task, done: true })}
          style={{ backgroundColor: "green" }}
          className="m-2 grid place-items-center w-1/2">
          <MdOutlineDone />
        </button>
        <button
          className="m-2 grid place-items-center w-1/2"
          onClick={() => setVisible(true)}
          style={{ backgroundColor: "#c22525" }}>
          <IoMdTrash />
        </button>
      </div>
      {task.date ? (
        <p className="p-3 bg-[#852db7] rounded-b-md">
          Due date on: {formatDate(task.date)}
        </p>
      ) : (
        <p className="p-3 bg-[#852db7] rounded-b-md">Due date not set</p>
      )}
      {visible && (
        <ConfirmDelete
          id={task.id}
          onDelete={onDelete}
          setVisible={setVisible}
        />
      )}
    </div>
  );
}

const formatDate = (date) => {
  const [year, month, day] = date.toLocaleString().split("-");
  return `${day}-${month}-${year}`;
};
