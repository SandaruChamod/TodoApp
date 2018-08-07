/**
 * @desc Delete item event.
 * @param id - name of the item to delete
 */
function onDeleteButtonClick(id) {
    let toDoItem = findComponentById(id);
    if (toDoItem) toDoItem.remove();
    let index = dataList.findIndex(k => k.name === id);
    if (index) {
        dataList.splice(index, 1);
        setData("todoList", dataList);
        reloadPage();
    }
}
