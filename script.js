async function loadTasks() {
  const res = await fetch('api.php?action=list');
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;
    const delBtn = document.createElement('button');
    delBtn.textContent = '!';
    delBtn.onclick = async () => {
      await fetch(`api.php?action=delete&id=${task.id}`);
      loadTasks();
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

document.getElementById('addBtn').onclick = async () => {
  const title = document.getElementById('newTask').value;
  if (!title) return;
  await fetch('api.php?action=add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title })
  });
  document.getElementById('newTask').value = '';
  loadTasks();
};

loadTasks();
