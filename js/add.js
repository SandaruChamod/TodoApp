/**
 * @desc Event Listner for addBtn
 * @param e - click event
 */
findComponentById('addBtn').addEventListener('click', function (e) {
    const inputTextComponent = findComponentById('activityText');
    let inputTextValue = inputTextComponent !== null ? inputTextComponent.value : undefined;
    if (!inputTextValue) return;
    dataList = getData("todoList");
    let task = dataList.find(k => k.name === inputTextValue);
    if (task) {
        return;
    }
    dataList.push({name: inputTextValue, completed: false});
    setData("todoList", dataList);
    reloadPage();
});


/**
 * @desc Load data to DOM
 */
function addDOMItems() {
    dataList = sortList(dataList);
    let container = findComponentById("containerId");
    if (container) {
        container.innerHTML = '';
        for (let i = 0; i < dataList.length; i++) {
            container.innerHTML +=
                '   <div  class="uk-card-small uk-card-hover uk-card-default wrapper inner todoItem curve">\n' +
                '        <div id="' + dataList[i].name + '" class="uk-card-body body" uk-tooltip="title:Click to edit; pos: left" contenteditable="true" onkeydown="onKeyDown(event,this.id,this.innerText)" onblur="onBlur(id,this.innerText)">' + dataList[i].name +
                '            <div class="uk-align-right">\n' +
                '                <a><img id="' + dataList[i].name + '" onclick="onCompletButtonClick(this.id)" class="check" src="images/checked_small.png"></a>\n' +
                '                <a><img id="' + dataList[i].name + '" onclick="onDeleteButtonClick(this.id)" class="close delete" src="images/delete_small.png"></a>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>';

            let newlyAddedComponent = findComponentById(dataList[i].name);
            if (dataList[i].completed) {
                newlyAddedComponent.classList.add("success");
                newlyAddedComponent.classList.add("curve");
            }
        }
    }
}
