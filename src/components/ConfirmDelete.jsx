/* eslint-disable react/prop-types */
import { MdOutlineWarningAmber } from "react-icons/md";

export default function ConfirmDelete({ id, onDelete, setVisible }) {
  return (
    <div className="absolute grid place-items-center rounded-md left-0 top-0 w-full h-full bg-slate-800">
      <MdOutlineWarningAmber size={50} color="yellow" />
      <p className="text-center text-xl">Permanently remove Task ?</p>
      <div className="flex gap-2">
        <button onClick={() => onDelete(id)}>Delete</button>
        <button onClick={() => setVisible(false)}>Cancel</button>
      </div>
    </div>
  );
}
