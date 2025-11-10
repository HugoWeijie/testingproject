async function loadTests() {
  const res = await fetch('api.php?action=list');
  const tasks = await res.json();
  const list = document.getElementById('testlist');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('ol');
    li.textContent = task.title;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'REMOVE';
    delBtn.onclick = async () => {
      await fetch(`api.php?action=delete&id=${task.id}`);
      loadTests();
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

document.getElementById('addBtn').onclick = async () => {
  const title = document.getElementById('test').value;
  if (!title) return;
  await fetch('api.php?action=add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title })
  });
  document.getElementById('test').value = '';
  loadTests();
};

loadTests();
