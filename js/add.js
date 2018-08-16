import {dataList, initFunctions, pushDataToDataList, setDataList} from './main.js'
import {findComponentById, loadDOMElements} from './util.js'
import {getData, setData} from './storage-util.js'
import Todo from "./todo.js";

/**
 * @desc Event Listner for addBtn
 * @param e - click event
 */
findComponentById('addBtn').addEventListener('click', function (e) {
    const inputTextValue = findComponentById('activityText').value;
    if (!inputTextValue) {
        this.blur();
        return;
    }
    if ((getData('todoList')).length > 0) {
        setDataList(getData('todoList'));
    }
    let task = dataList.find(item => item._itemName === inputTextValue);
    if (task) {
        return;
    }
    pushDataToDataList(new Todo(inputTextValue,false));
    setData('todoList', dataList);
    addDOMItem(inputTextValue,false);
    findComponentById('activityText').value = '';
    this.blur();
});

/**
 * @desc Load data to DOM
 */
export function addDOMItem(taskName,completed) {
    let container = findComponentById('containerId');
    if (container) {
        container.insertAdjacentHTML(completed === false ?'afterbegin':'beforeend','<div class="uk-card-small uk-card-hover uk-card-default wrapper inner todoItem curve">\n' +
            '        <div id="' + taskName + '" class="uk-card-body body" uk-tooltip="title:Click to edit; pos: left" contenteditable="true" onkeydown="window.toDoFunctions.onKeyDown(event,this.id,this.innerText)" onblur="window.toDoFunctions.onBlurFromBody(id,this.innerText)">' + taskName +
            '            <div class="uk-align-right">\n' +
            '                <a><img id="' + taskName + '" onclick="window.toDoFunctions.onCompletButtonClick(this)" class="check" src="images/checked_small.png"></a>\n' +
            '                <a><img id="' + taskName + '" onclick="window.toDoFunctions.onDeleteButtonClick(this)" class="close delete" src="images/delete_small.png"></a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>');

        initFunctions();
        loadDOMElements();
        let newlyAddedComponent = findComponentById(taskName);
        if (completed) {
            newlyAddedComponent.classList.add('success');
            newlyAddedComponent.classList.add('curve');
        }
    }
}

