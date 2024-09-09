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

  console.log("taskList:", taskList);
  dialog.close();
}

function handleShowModal() {
  dialog.showModal();
}

function handleCloseModal() {
  dialog.close();
}
