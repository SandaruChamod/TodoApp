/**
 * @desc Event Listner for addBtn
 * @param e - click event
 */
findComponentById('addBtn').addEventListener('click', function (e) {
    const INPUT_TEXT_VALUE = findComponentById('activityText').value;
    if (!INPUT_TEXT_VALUE) return;
    dataList = getData("todoList");
    let task = dataList.find(item => item.name === INPUT_TEXT_VALUE);
    if (task) {
        return;
    }
    dataList.push({name: INPUT_TEXT_VALUE, completed: false});
    setData("todoList", dataList);
    addDOMItems(INPUT_TEXT_VALUE, false);
    findComponentById('activityText').value = '';
    this.blur();
});


/**
 * @desc Load data to DOM
 */
function addDOMItems(taskName, completed) {
    let container = findComponentById("containerId");
    if (container) {
        container.insertAdjacentHTML(completed === false ? 'afterbegin' : 'beforeend', '<div class="uk-card-small uk-card-hover uk-card-default wrapper inner todoItem curve">\n' +
            '        <div id="' + taskName + '" class="uk-card-body body" uk-tooltip="title:Click to edit; pos: left" contenteditable="true" onkeydown="onKeyDown(event,this.id,this.innerText)" onblur="onBlur(id,this.innerText)">' + taskName +
            '            <div class="uk-align-right">\n' +
            '                <a><img id="' + taskName + '" onclick="onCompletButtonClick(this)" class="check" src="images/checked_small.png"></a>\n' +
            '                <a><img id="' + taskName + '" onclick="onDeleteButtonClick(this)" class="close delete" src="images/delete_small.png"></a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>');

        loadDOMElements();
        let newlyAddedComponent = findComponentById(taskName);
        if (completed) {
            newlyAddedComponent.classList.add("success");
            newlyAddedComponent.classList.add("curve");
        }
    }
}
