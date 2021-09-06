function createNewTask(todo) {
  // Creating cross button
  const cross = document.createElement('input')
  cross.value = "Cross"
  cross.type = "button"
  cross.onclick = () => completeTask
  // Creating text of the task
  const todoElement = document.createElement('p')
  todoElement.innerHTML = todo
  // Creating the delete button
  const deleteButton = document.createElement("input")
  deleteButton.value = "Delete"
  deleteButton.type = "button"
  deleteButton.onclick = () => deleteTask
  // Creating the container task
  const containerDiv = document.createElement('div')
  containerDiv.classList.add("task")
  containerDiv.appendChild(cross)
  containerDiv.appendChild(todoElement)
  containerDiv.appendChild(deleteButton)
  // Adding container task into the HTML 
  document.getElementById("tasks").appendChild(containerDiv)
}

function completeTask(event) {
  event.target.parentNode.children[1].classList.add("strike")
}

function deleteTask(event) {
  const deleteItem = event.target.parentNode
  deleteItem.parentNode.removeChild(deleteItem)
}