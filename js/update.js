import {dataList,reloadPage} from './main.js'
import {findDOMElement} from './util.js'
import {setData} from './storageUtility.js'

/**
 * @desc Update Item event.
 * @param id - name of the item to update
 * @param newValue - new name value to update
 */
export function onBlurFromBody(id, newValue) {
    newValue = newValue.trim();
    if (newValue === "") {
        reloadPage();
    } else {
        let toDoItem = findDOMElement(id).firstElementChild;
        let item = dataList.find(item => item._itemName === id);
        if (item) {
            item._itemName = newValue;
            setData("todoList", dataList);
            toDoItem.id = newValue;
            toDoItem.childNodes[0].data = newValue;
        }
    }
}

/**
 * @desc Keydown event.
 * @param event - keydown event
 * @param id - name of the item to update
 * @param newValue - new name value to update
 */
export function onKeyDown(event, id, newValue) {
    if (event.keyCode === 13) {
        event.preventDefault();
        onBlurFromBody(id, newValue);
        event.target.blur();
    }
}