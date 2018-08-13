import {dataList, spliceFromDataList} from './main.js'
import {findDOMElement} from './util.js'
import {setData} from './storageUtility.js'

/**
 * @desc Delete item event.
 * @param buttonId - name of the item to delete
 */
export function onDeleteButtonClick(buttonId) {
    let id = buttonId.parentNode.parentNode.parentNode.id;
    let index = dataList.findIndex(item => item._itemName === id);
    if(index === -1) return;

    let item = findDOMElement(id);
    if (!item) return;


    spliceFromDataList(index);
    item.remove();
    setData("todoList", dataList);
}
