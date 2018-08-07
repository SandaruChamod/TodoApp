/**
 * @desc Completed button click event.
 * @param id - name of the completed item
 */
function onCompletButtonClick(id) {
    let toDoItem = findComponentById(id);
    dataList = getData("todoList");
    let item = dataList.find(k => k.name === id);
    if (item && toDoItem) {
        if (item.completed) {
            toDoItem.classList.remove("success");
            item.completed = false;
        } else {
            let index = dataList.findIndex(k => k.name === item.name);
            if (index > -1) {
                dataList.splice(index, 1);
                dataList.push({name: item.name, completed: true});
                toDoItem.classList.add("success");
                toDoItem.classList.add("curve");
            }
        }
    }
    setData("todoList", dataList);
    reloadPage();
}