import { printTaskList } from "./printTaskList.js";
import { task } from "./task.js";

export function addTaskList(params, taskList) {
  const date = new Date().toLocaleDateString();

  if (params.value) {
    const findItem = task.find((item) => item.name === params.value);
    if (!findItem) {
      const newTask = {
        name: params.value.trim(),
        status: false,
        date: date,
      };
      task.push(newTask);
      printTaskList(taskList);
    } else {
      alert("Такая задача уже существует");
    }
  }
}
