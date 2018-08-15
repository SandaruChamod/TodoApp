import {dataList, setDataList} from './main.js'
import {findDOMElement} from './util.js'
import {addDOMItem} from './add.js'
import {getData, setData} from './storage-util.js'

/**
 * @desc Completed button click event.
 * @param buttonId - name of the completed item
 */
export function onCompletButtonClick(buttonId) {
    let id = buttonId.parentNode.parentNode.parentNode.id;
    let toDoItem = findDOMElement(id).firstElementChild;
    if (!toDoItem)return;

    setDataList(getData('todoList'));

    let item = dataList.find(item => item._itemName === id);
    if (!item)return;
    let itemIndex = dataList.findIndex(value => value._itemName === item._itemName);

    if (item._completed) {
        item._completed = false;
        let itemToDelete = findDOMElement(id);
        if (itemToDelete)itemToDelete.remove();
        addDOMItem(item._itemName,false);
    } else {
        item._completed = true;
        let itemToDelete = findDOMElement(id);
        if (itemToDelete)itemToDelete.remove();
        addDOMItem(item._itemName,true);
    }
    setData('todoList', dataList);
}