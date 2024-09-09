const dialog = document.getElementById("task-dialog");
const emptyState = document.getElementById("empty-state");
const tasksContent = document.querySelector(".tasks-content");
const taskList = [];

function handleSaveTask() {
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-desc").value;

  taskList.push({
    taskName: title,
    taskDescription: description,
    isChecked: false,
  });

  renderTaskList();
  console.log("taskList:", taskList);
  dialog.close();
}

function renderTaskList() {
  tasksContent.innerHTML = ""; // Limpa o conteúdo anterior

  if (taskList.length > 0) {
    emptyState.style.display = "none";

    taskList.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task-item");
      taskElement.innerHTML = `
        <input type="checkbox"/>
        <div class="task-info">
          <span class="task-name">${task.taskName}</span>
          <span class="task-description">${task.taskDescription}</span>
        </div>
      `;
      tasksContent.appendChild(taskElement);
    });
  } else {
    emptyState.style.display = "flex";
  }
}

function handleShowModal() {
  dialog.showModal();
}

function handleCloseModal() {
  dialog.close();
}
