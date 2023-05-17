const forma = document.getElementById('form');
const input = document.getElementById('taskInput');
const listOfTasks = document.getElementById('tasksList')

let tasks = [];

if(localStorage.getItem('task')){
    tasks = JSON.parse(localStorage.getItem('task'));
    tasks.forEach((task) => loadTask(task));
}

checkTasksList();

forma.addEventListener('submit', addTask)

listOfTasks.addEventListener('click', deleteTask)

listOfTasks.addEventListener('click',finishTask)

function finishTask(e){
    if (e.target.dataset.action !== 'done') return;

    const parent = e.target.closest('li');

    const id = parent.id;

    const task = tasks.find((task) => task.id == id)
    task.done = !task.done ;

    checkTasksList();

    const spanTitle = parent.querySelector('span');

    spanTitle.classList.toggle('task-title--done');

}
function addTask(event){
    event.preventDefault();

    const textTask = input.value

    const newTask = {
        id:Date.now(),
        text: textTask,
        done:false
    };

    tasks.push(newTask)

    loadTask(newTask);

    input.value = '';
    input.focus()
    checkTasksList();
    workWithLocalStorage();
}
function deleteTask(event){
    if (event.target.dataset.action !== 'delete') return;

    const parent = event.target.closest('li');

    const id = parent.id;

    const findIndex = tasks.findIndex((task) => task.id == id);
    tasks.splice(findIndex, 1)
    parent.remove();
    checkTasksList();
    workWithLocalStorage();
}
function checkTasksList (){
    if (tasks.length === 0){
        const emptyBlock = `<li id="emptyList" class="list-group-item empty-list">
                <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
                <div class="empty-list__title">Список дел пуст</div>
            </li>`
        listOfTasks.insertAdjacentHTML("afterbegin", emptyBlock);
    }
    if (tasks.length > 0){
        const clearDo = document.getElementById('emptyList')
        clearDo ? clearDo.remove() : null;
    }
}
function workWithLocalStorage (){
    localStorage.setItem('task',JSON.stringify(tasks))
}
function loadTask (task){
    const cssClass = task.done ? "task-title task-title--done" : "task-title"


    const taskPattern = `<li id ="${task.id}" class="list-group-item d-flex justify-content-between task-item">
                <span class="${cssClass}">${task.text}</span>
                <div class="task-item__buttons">
                    <button type="button" data-action="done" class="btn-action">
                        <img src="./img/tick.svg" alt="Done" width="18" height="18">
                    </button>
                    <button type="button" data-action="delete" class="btn-action">
                        <img src="./img/cross.svg" alt="Done" width="18" height="18">
                    </button>
                </div>
            </li>`
    listOfTasks.insertAdjacentHTML("beforeend", taskPattern);
}