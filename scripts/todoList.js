// scripts/todoList.js
const STORAGE_KEY = 'todo.tasks';
let tasks = [];

function loadTasks() {
    const raw = localStorage.getItem(STORAGE_KEY);
    tasks = raw ? JSON.parse(raw) : [];
}

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function comparePriority(a, b) {
    return Number(a.priority) - Number(b.priority) || a.createdAt - b.createdAt;
}

function renderTasks() {
    const list = document.getElementById('tasksList');
    const emptyMsg = document.getElementById('emptyMsg');
    list.innerHTML = '';

    if (!tasks.length) {
        emptyMsg.style.display = 'block';
        return;
    }
    emptyMsg.style.display = 'none';

    const sorted = [...tasks].sort(comparePriority);

    sorted.forEach(task => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.dataset.id = task.id;

        const meta = document.createElement('div');
        meta.className = 'task-meta';

        const title = document.createElement('div');
        title.className = 'task-title';
        title.textContent = task.title;

        const priority = document.createElement('div');
        priority.className = `task-priority priority-${task.priority}`;
        priority.textContent = priorityText(task.priority);

        meta.appendChild(title);
        meta.appendChild(priority);

        const details = document.createElement('div');
        details.className = 'task-details';
        details.textContent = task.details || '';

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'Editar';
        editBtn.addEventListener('click', () => startEdit(task.id));

        const delBtn = document.createElement('button');
        delBtn.className = 'btn delete';
        delBtn.textContent = 'Eliminar';
        delBtn.addEventListener('click', () => deleteTask(task.id));

        actions.appendChild(editBtn);
        actions.appendChild(delBtn);

        card.appendChild(meta);
        card.appendChild(details);
        card.appendChild(actions);

        list.appendChild(card);
    });
}

function priorityText(value) {
    if (String(value) === '1') return 'Alta';
    if (String(value) === '2') return 'Media';
    return 'Baja';
}

function addTaskFromForm(e) {
    e.preventDefault();
    const titleEl = document.getElementById('taskTitle');
    const detailsEl = document.getElementById('taskDetails');
    const priorityEl = document.getElementById('taskPriority');

    const title = titleEl.value.trim();
    if (!title) return;

    const task = {
        id: Date.now().toString(),
        title,
        details: detailsEl.value.trim(),
        priority: Number(priorityEl.value),
        createdAt: Date.now()
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    e.target.reset();
    titleEl.focus();
}

function deleteTask(id) {
    if (!confirm('¿Eliminar esta tarea?')) return;
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}

function startEdit(id) {
    const card = document.querySelector(`.task-card[data-id="${id}"]`);
    if (!card) return;
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    card.innerHTML = '';

    const form = document.createElement('form');
    form.className = 'edit-form';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.required = true;
    titleInput.value = task.title;

    const detailsInput = document.createElement('textarea');
    detailsInput.rows = 2;
    detailsInput.value = task.details || '';

    const prioritySelect = document.createElement('select');
    ['1','2','3'].forEach(v => {
        const opt = document.createElement('option');
        opt.value = v;
        opt.textContent = priorityText(v);
        if (Number(v) === Number(task.priority)) opt.selected = true;
        prioritySelect.appendChild(opt);
    });

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.className = 'btn save';
    saveBtn.textContent = 'Guardar';

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.className = 'btn cancel';
    cancelBtn.textContent = 'Cancelar';
    cancelBtn.addEventListener('click', () => renderTasks());

    form.appendChild(titleInput);
    form.appendChild(detailsInput);
    form.appendChild(prioritySelect);
    form.appendChild(saveBtn);
    form.appendChild(cancelBtn);

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        task.title = titleInput.value.trim() || task.title;
        task.details = detailsInput.value.trim();
        task.priority = Number(prioritySelect.value);
        saveTasks();
        renderTasks();
    });

    card.appendChild(form);
    titleInput.focus();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
    const form = document.getElementById('taskForm');
    form.addEventListener('submit', addTaskFromForm);
});
