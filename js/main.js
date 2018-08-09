/*
    Array for store to-dos
 */
let dataList;
/*
    Array for store DOM elements
 */
let domList = [];


/**
 * @desc Document load event.
 */
window.onload = function () {
    dataList = getData("todoList");
    if (dataList.length > 0) {
        for (let i = 0; i < dataList.length; i++) addDOMItems(dataList[i].name, dataList[i].completed);
        domList = document.querySelectorAll('.wrapper');
    }
};

/**
 * @desc Reload page.
 */
function reloadPage() {
    document.location.reload(true);
}



