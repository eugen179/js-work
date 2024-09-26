const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value; 

    if (taskText !== '') {
        const newTask = document.createElement('li'); 
        newTask.textContent = taskText; 
        taskList.appendChild(newTask); 

        taskInput.value = '';
    }
});