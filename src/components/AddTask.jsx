/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a task");
    } else {
      onAddTask(text, description, date);
    }
    setText("");
    setDescription("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-4 md:w-1/2 lg:w-1/3 md:mx-auto mb-8 flex flex-col">
      <input
        className="p-3"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <textarea
        className="p-3"
        type="text"
        placeholder="Add Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label htmlFor="dueDate" className="text-left text-lg ">
        Enter the Due Date:
      </label>
      <input
        className="p-3"
        id="dueDate"
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          // console.log(e.target.valueAsDate);
        }}
      />
      <br />
      <button style={{ backgroundColor: "#822cb2" }}>ADD</button>
    </form>
  );
}
