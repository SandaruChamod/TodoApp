/**
 * @desc Completed button click event.
 * @param buttonId - name of the completed item
 */
function onCompletButtonClick(buttonId) {
    let id = buttonId.parentNode.parentNode.parentNode.id;

    let toDoItem = findDOMElement(id).firstElementChild;
    if (!toDoItem) return;

    dataList = getData("todoList");

    let item = dataList.find(item => item.name === id);
    if (!item) return;
    let itemIndex = dataList.findIndex(value => value.name === item.name);

    if (item.completed) {
        item.completed = false;
        let itemToDelete = findDOMElement(id);
        if (itemToDelete) itemToDelete.remove();
        addDOMItems(item.name, false);
    } else {
        item.completed = true;
        let itemToDelete = findDOMElement(id);
        if (itemToDelete) itemToDelete.remove();
        addDOMItems(item.name, true);
    }
    setData("todoList", dataList);
}