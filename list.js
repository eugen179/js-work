document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = '';

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});