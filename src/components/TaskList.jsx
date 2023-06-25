/* eslint-disable react/prop-types */

import Task from "./TaskItem";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div className="tasks w-4/5 mx-auto">
      {tasks.length <= 0 ? (
        <h2 className="text-2xl p-3 border text-center">No Task Added</h2>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3 transition-all">
          {tasks.map((task) => (
            <li key={task.id} className="flex flex-col  select-none">
              <Task
                task={task}
                onChange={onChangeTask}
                onDelete={onDeleteTask}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
