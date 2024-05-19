import { nanoid } from "nanoid";
// Later: Use classes for instantiated tasks list

const list = {};

const tasks = () => list;

const add = (task) => {
  const taskId = nanoid();
  list[taskId] = {
    'name': task.name
  };
  return taskId;
}

const remove = (taskId) => {
  delete list(taskId);
}

const todo = {tasks, add, remove}

export default todo;