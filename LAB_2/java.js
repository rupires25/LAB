var currentEditTaskRow;

function addTask() {
  var taskName = document.getElementById('taskName').value;
  var taskDate = document.getElementById('taskDate').value;

  if (taskName === '' || taskDate === '') {
    alert('Please enter both task and date.');
    return;
  }

  // Format date as dd/mm/yyyy
  var formattedDate = formatDate(taskDate);

  var taskRow = document.createElement('tr');
  taskRow.innerHTML = `
    <td>${taskName}</td>
    <td>${formattedDate}</td>
    <td><input type="checkbox"></td>
  `;

  document.getElementById('tasks').appendChild(taskRow);

  // Close modal and clear form fields
  $('#addTaskModal').modal('hide');
  document.getElementById('taskName').value = '';
  document.getElementById('taskDate').value = '';
}

function editTask(button) {
  var taskRow = button.closest('tr');
  currentEditTaskRow = taskRow;

  var taskName = taskRow.cells[0].innerText;
  var taskDate = taskRow.cells[1].innerText;

  // Populate edit task modal with task details
  document.getElementById('editTaskName').value = taskName;
  document.getElementById('editTaskDate').value = taskDate;

  // Show edit task modal
  $('#editTaskModal').modal('show');
}

function saveEditedTask() {
  var editedTaskName = document.getElementById('editTaskName').value;
  var editedTaskDate = document.getElementById('editTaskDate').value;

  if (editedTaskName === '' || editedTaskDate === '') {
    alert('Please enter both task and date.');
    return;
  }

  // Format date as dd/mm/yyyy
  var formattedDate = formatDate(editedTaskDate);

  currentEditTaskRow.cells[0].innerText = editedTaskName;
  currentEditTaskRow.cells[1].innerText = formattedDate;

  // Close edit task modal
  $('#editTaskModal').modal('hide');
  }
  
  function deleteTask() {
  if (currentEditTaskRow) {
  currentEditTaskRow.remove();
  }
  
  // Close edit task modal
  $('#editTaskModal').modal('hide');
  }
  
  // Function to format date as dd/mm/yyyy
  function formatDate(dateString) {
    var date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }



  function closeTab(event) {
    event.preventDefault(); // Prevent the default link behavior
    // Get the tab content element
    var tabContent = document.getElementById("tabContent");
    // Remove the tab content from the DOM
    tabContent.parentNode.removeChild(tabContent);
    // Optionally, you can also close the browser window/tab if needed
    // window.close();
}