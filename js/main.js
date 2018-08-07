/*
    Array for store to-dos
 */
let dataList;


/**
 * @desc Document load event.
 */
window.onload = function () {
    dataList = getData("todoList");
    if (dataList) {
        if (dataList.length > 0) {
            addDOMItems();
        }
    }
};

/**
 * @desc Reload page.
 */
function reloadPage() {
    document.location.reload(true);
}



