function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const acceptBtn = document.createElement('button');
    acceptBtn.textContent = '✅ Accept';
    acceptBtn.onclick = () => li.style.textDecoration = 'line-through';

    const refuseBtn = document.createElement('button');
    refuseBtn.textContent = '❌ Refuse';
    refuseBtn.onclick = () => li.remove();

    li.appendChild(acceptBtn);
    li.appendChild(refuseBtn);

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}
