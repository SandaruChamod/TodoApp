let todoList;

/*
    Load items event.
 */
function loadToDosFromLocalStorage() {
    const toDoListData = localStorage.getItem("todoList");
    todoList = toDoListData !== null ? JSON.parse(toDoListData) : [];
}

/*
    Save items event.
 */
function saveToDosToLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

/*
    Sort list.
 */
function sortToDoList() {
    let tempList = [];
    let length = todoList.length;
    let i = todoList.length;
    while (i--) {
        if (todoList[i].completed) {
            tempList.push(todoList[i]);
            todoList.splice(i, 1);
        }
    }
    todoList = todoList.concat(tempList);

}
/*
    Document load event.
 */
window.onload = function () {
    loadToDosFromLocalStorage();
    if (todoList.length > 0) {
        addDOMItems();
    }
};
/*
    Add button event listner.
    @param {e} Click event
 */
document.getElementById('addBtn').addEventListener('click', function (e) {
    let inputTextCurrentValue = document.getElementById('activityText').value;
    if (!inputTextCurrentValue) return;
    loadToDosFromLocalStorage();
    let task = findToDoItem(inputTextCurrentValue);
    if (task !== undefined) {
        return;
    }
    todoList.push({name: inputTextCurrentValue, completed: false});
    saveToDosToLocalStorage();
    reloadPage();
});

/*
    Load Todos into DOM.
 */
function addDOMItems() {
    sortToDoList();
    let container = document.getElementById("containerId");
    container.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        container.innerHTML +=
            '   <div  class="uk-card-small uk-card-hover uk-card-default wrapper inner todoItem curve">\n' +
            '        <div id="' + todoList[i].name + '" class="uk-card-body body" uk-tooltip="title:Click to edit; pos: left" contenteditable="true" onkeydown="checkKeyCodeToUpdate(event,this.id,this.innerText)" onblur="updateItem(id,this.innerText)">' + todoList[i].name +
            '            <div class="uk-align-right">\n' +
            '                <a><img id="' + todoList[i].name + '" onclick="completedButtonClick(this.id)" class="check" src="images/checked_small.png"></a>\n' +
            '                <a><img id="' + todoList[i].name + '" onclick="deleteButtonClick(this.id)" class="close delete" src="images/delete_small.png"></a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>';

        //get added item's component
        let item = document.getElementById(todoList[i].name);
        if (todoList[i].completed) {
            item.classList.add("success");
            item.classList.add("curve");
        }
    }
}

/*
    Reload page.
 */
function reloadPage() {
    document.location.reload(true);
}

/*
    Completed button click event.
    @param {id} Clicked component's id
 */
function completedButtonClick(id) {
    let toDoitem = document.getElementById(id);
    loadToDosFromLocalStorage();
    let item = findToDoItem(id);
    if (item) {
        if (item.completed) {
            toDoitem.classList.remove("success");
            item.completed = false;
        } else {
            let index = findItemIndex(item.name);
            if (!isNaN(index)) {
                todoList.splice(index, 1);
                todoList.push({name: item.name, completed: true});
                toDoitem.classList.add("success");
                toDoitem.classList.add("curve");
            }
        }
    }
    saveToDosToLocalStorage();
    reloadPage();
}

/*
    Check key code event.
    @param {event, id, newText} keydown event , component id , new value
 */
function checkKeyCodeToUpdate(event, id, newText) {
    if (event.keyCode === 13) {
        event.preventDefault();
        updateItem(id, newText);
        reloadPage();
    }
}

/*
    Update Item event.
    @param {id, newText} component id , new value
 */

function updateItem(id, newValue) {
    newValue = newValue.trim();
    if (newValue === "") {
        reloadPage();
    } else {
        let item = findToDoItem(id);
        if (item !== undefined) {
            item.name = newValue;
            saveToDosToLocalStorage();
            reloadPage();
        }
    }
}

/*
    Delete item event.
    @param {id} component id
 */
function deleteButtonClick(id) {
    let toDoitem = document.getElementById(id);
    toDoitem.remove();

    let index = findItemIndex(id);
    if (!isNaN(index)) todoList.splice(index, 1);
    saveToDosToLocalStorage();
    reloadPage();
}

/*
    Find item's index event.
    @param {value} name of the item
 */
function findItemIndex(value) {
    loadToDosFromLocalStorage();
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].name === value) {
            return i;
        }
    }
}

/*
    Find item event.
    @param {value} name of the item
 */
function findToDoItem(value) {
    loadToDosFromLocalStorage();
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].name === value) {
            return todoList[i];
        }
    }
}