/**
 * @desc Update Item event.
 * @param id - name of the item to update
 * @param newValue - new name value to update
 */
function onBlur(id, newValue) {
    newValue = newValue.trim();
    if (newValue === "") {
        reloadPage();
    } else {
        let item = findElementByValue(dataList, id);
        if (item) {
            item.name = newValue;
            setData("todoList", dataList);
            reloadPage();
        }
    }
}

/**
 * @desc Keydown event.
 * @param event - keydown event
 * @param id - name of the item to update
 * @param newValue - new name value to update
 */
function onKeyDown(event, id, newValue) {
    if (event.keyCode === 13) {
        event.preventDefault();
        onBlur(id, newValue);
        reloadPage();
    }
}