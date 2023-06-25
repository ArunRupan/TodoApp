/* eslint-disable react/prop-types */
import { MdOutlineCheckCircle } from "react-icons/md";

export default function Completed({ task, onDelete, onChange }) {
  return (
    <div className="absolute grid place-items-center rounded-md left-0 top-0 w-full h-full bg-slate-800">
      <p className="text-center text-xl">{task.text}</p>
      <MdOutlineCheckCircle size={70} color="green" />
      <div className="flex gap-2">
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onChange({ ...task, done: false })}>
          Reset
        </button>
      </div>
    </div>
  );
}
