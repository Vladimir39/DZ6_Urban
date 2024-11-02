import { task } from "./task.js";

export function printTaskList(taskList) {
  taskList.innerHTML = "";
  task.map((item, index) => {
    const article = document.createElement("article");
    article.className = "pacifico-regular";
    article.innerHTML = ` <div class="checkIcon ${
      item.status ? "checkIconActive" : ""
    }">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-check-big"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <div class="deleteIcon hidden">
                  <svg
                    id="deleteIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </div>
                <h3>Задача №${index + 1}</h3>
                <p>
                ${item.name}
                </p>
                <div class="date">
                  <span>Дата добавления: ${item.date}</span>
                </div>`;

    taskList.append(article);
  });
}
