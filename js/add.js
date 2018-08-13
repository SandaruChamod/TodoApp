import {dataList, pushDataToDataList, setDataList} from './main.js'
import {onBlurFromBody, onKeyDown} from './update.js'
import {onDeleteButtonClick} from './delete.js'
import {onCompletButtonClick} from './complete.js'
import {findComponentById, loadDOMElements} from './util.js'
import {getData, setData} from './storageUtility.js'
import Todo from "./todo.js";

/**
 * @desc Event Listner for addBtn
 * @param e - click event
 */
findComponentById('addBtn').addEventListener('click', function (e) {
    const inputTextValue = findComponentById('activityText').value;
    if (!inputTextValue) return;
    if ((getData("todoList")).length > 0){
        setDataList(getData("todoList"));
    }
    let task = dataList.find(item => item._itemName === inputTextValue);
    if (task) {
        return;
    }
    pushDataToDataList(new Todo(inputTextValue,false));
    setData("todoList", dataList);
    addDOMItem(inputTextValue,false);
    findComponentById('activityText').value = '';
    this.blur();
});

/**
 * @desc Load data to DOM
 */
export function addDOMItem(taskName,completed) {
    let container = findComponentById("containerId");
    if (container) {
        container.insertAdjacentHTML(completed === false ?'afterbegin':'beforeend','<div class="uk-card-small uk-card-hover uk-card-default wrapper inner todoItem curve">\n' +
            '        <div id="' + taskName + '" class="uk-card-body body" uk-tooltip="title:Click to edit; pos: left" contenteditable="true" onkeydown="onKeyDown(event,this.id,this.innerText)" onblur="onBlurFromBody(id,this.innerText)">' + taskName +
            '            <div class="uk-align-right">\n' +
            '                <a><img id="' + taskName + '" onclick="onCompletButtonClick(this)" class="check" src="images/checked_small.png"></a>\n' +
            '                <a><img id="' + taskName + '" onclick="onDeleteButtonClick(this)" class="close delete" src="images/delete_small.png"></a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>');

        initFunctions();
        loadDOMElements();
        let newlyAddedComponent = findComponentById(taskName);
        if (completed) {
            newlyAddedComponent.classList.add("success");
            newlyAddedComponent.classList.add("curve");
        }
    }
}

/**
 * @desc Init module methods for DOM use
 */
function initFunctions() {
    window.onCompletButtonClick = onCompletButtonClick;
    window.onDeleteButtonClick = onDeleteButtonClick;
    window.onKeyDown = onKeyDown;
    window.onBlurFromBody = onBlurFromBody;
}
