import { addTaskList, printTaskList, deleteTaskList } from "./module/index.js";

const addInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.querySelector(".taskList");
const deleteIcon = document.querySelector(".deleteIcon");

console.log(deleteIcon);
//Вывод задач
printTaskList(taskList);

//Добавление задачи
addBtn.addEventListener("click", () => addTaskList(addInput, taskList));

//Удаление задачи

deleteIcon.addEventListener("click", () => console.log(deleteIcon));
