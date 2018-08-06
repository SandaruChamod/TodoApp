// ArrayList for ToDos
let todoList;
//Object to identify how to find items from todos
let ItemEnum = Object.freeze({"INDEX": 1, "ITEM": 2});

//Load ToDos
function loadToDosFromLocalStorage() {
    // //Check if todoList contain in localStorage
    // if(null !== localStorage.getItem("todoList")) {
    //     //get todolist from localstorage
    //     todoList = JSON.parse(localStorage.getItem("todoList"));
    // }else{
    //     //initialize default value to todoList
    //
    //
    // }
    const toDoListData = localStorage.getItem("todoList");
    todoList = toDoListData !== null ? JSON.parse(toDoListData) : [];
}

//Save ToDos
function saveToDosToLocalStorage() {
    //Sort todolist
    // sortToDoList();
    //save todoList in localstorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

//sort todolist to append completed taks to last
function sortToDoList() {
    let tempList = [];
    let length = todoList.length;
    //check whether todoList's length is greater than 1
    for (let i = 0; i < todoList.length; i++) {
        //check if todo item's competed value is true
        if (todoList[i].completed) {
            //push completed tasks inside todoList to tempList
            tempList.push(todoList[i]);
            //remove pushed item from todoList
            todoList.splice(i, 1);
        }
    }
    //concat tmeplist to todoList
    todoList = todoList.concat(tempList);

}

/*
    Document load event.
    @param {arg} Input text field name
 */

// Load Todos on start
window.onload = function () {
    //initialize todoList
    loadToDosFromLocalStorage();
    //check whether todoList null or not
    if (todoList.length > 0) {
        //load to-do items to DOM
        addDOMItems();
    }
};

// Convert Todo to completed one when click the addBtn
document.getElementById('addBtn').addEventListener('click', function (e) {

    let activity = document.getElementById('activityText').value;
    if (!activity) return;

    loadToDosFromLocalStorage();
    //Get Value from Input , Set into ToDo and add ToDo to DOM

    let task = findToDoItem(activity);
    if (task) {
        // reloadPage();
        return;
    }

    todoList.push({name: activity, completed: false});
    saveToDosToLocalStorage();
    // reload
    reloadPage();
});

// Load ToDos to the DOM
function addDOMItems() {
    //sort list
    sortToDoList();
    //clear innerHTML of containerId div
    let container = document.getElementById("containerId");
    container.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        //Append new ToDo item into DOM
        container.innerHTML +=
            '   <div  class="uk-card-small uk-card-hover uk-card-default wrapper inner todoItem curve">\n' +
            '        <div id="' + todoList[i].name + '" class="uk-card-body body" uk-tooltip="title:Click to edit; pos: left" contenteditable="true" onkeydown="checkKeyCodeToUpdate(event,this.id,this.innerText)" onblur="updateItem(id,this.innerText)">' + todoList[i].name +
            '            <div class="uk-align-right">\n' +
            '                <a><img id="' + todoList[i].name + '" onclick="completedButtonClick(this.id)" class="check" src="images/checked_small.png"></a>\n' +
            '                <a><img id="' + todoList[i].name + '" onclick="deleteButtonClick(this.id)" class="close delete" src="images/delete_small.png"></a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>';

        //get component
        let item = document.getElementById(todoList[i].name);
        if (todoList[i].completed) {
            //Add success class to ToDo item when task is completed
            item.classList.add("success");
            item.classList.add("curve");
        }

    }
}

//Reload current page
function reloadPage() {
    document.location.reload(true);
}

// Task when click the completed button
function completedButtonClick(id) {
    let toDoitem = document.getElementById(id);
    loadToDosFromLocalStorage();
    //find todos
    let item = findToDoItem(id, ItemEnum.ITEM);
    if (item) {
        if (item.completed) {
            //If status completed,remove success class
            toDoitem.classList.remove("success");
            item.completed = false;
        } else {
            let index = findToDoItem(item.name, ItemEnum.INDEX);
            if (!isNaN(index)) {
                //remove item from toDoList
                todoList.splice(index, 1);
                //push removed toDoitem to last
                todoList.push({name: item.name, completed: true});
                //add success class to toDoitem
                toDoitem.classList.add("success");
                toDoitem.classList.add("curve");
            }
        }
    }
    //Save toDo list to localstorage
    saveToDosToLocalStorage();
    //reload page
    reloadPage();
}

//update todo item
function checkKeyCodeToUpdate(event, id, newText) {
    //check if the keycode equals to enter key
    if (event.keyCode === 13) {
        //stop default actions when pressed key is enter
        event.preventDefault();
        //update item
        updateItem(id, newText);
        // reload location
        reloadPage();
    }
}

//update todo item
function updateItem(id, newValue) {
    newValue = newValue.trim();
    if (newValue === "") {
        reloadPage();
    } else {
        let item = findToDoItem(id, ItemEnum.ITEM);
        if (item !== undefined) {
            item.name = newValue;
            saveToDosToLocalStorage();
            loadToDosFromLocalStorage();
            addDOMItems();
            reloadPage();
        }
    }
}

// Delete ToDo
function deleteButtonClick(id) {
    let toDoitem = document.getElementById(id);
    //get toDos from localStorage

    //remove ToDo from DOM
    toDoitem.remove();

    let index = findToDoItem(id, ItemEnum.INDEX);
    //Remove ToDo from list
    if (!isNaN(index)) todoList.splice(index, 1);
    //Save toDos to Local Storage
    saveToDosToLocalStorage();
    //Reaload Page
    reloadPage();
}

//find todo item
function findToDoItem(value, ENUM) {
    loadToDosFromLocalStorage();

    for (let i = 0; i < todoList.length; i++) {
        //check if specfic element's name equals passed name by client
        if (todoList[i].name === value) {
            //return maching item
            return ENUM === 2 ? todoList[i] : i;
        }
    }
}