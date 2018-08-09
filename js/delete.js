/**
 * @desc Delete item event.
 * @param buttonId - name of the item to delete
 */
function onDeleteButtonClick(buttonId) {
    let id = buttonId.parentNode.parentNode.parentNode.id;
    let index = dataList.findIndex(e => e.name === id);
    if (index === -1) return;

    let item = findDOMElement(id);
    if (!item) return;

    dataList.splice(index, 1);
    item.remove();
    setData("todoList", dataList);
}
