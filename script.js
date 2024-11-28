document.getElementById('task-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText) {
      addTask(taskText);
      taskInput.value = '';
  }
});

function addTask(taskText) {
  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.className = 'delete';
  deleteBtn.addEventListener('click', function() {
      taskList.removeChild(li);
  });

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Completada';
  completeBtn.className = 'complete';
  completeBtn.addEventListener('click', function() {
      li.classList.toggle('completed');
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
