/**
 * @desc Sort list
 * @param list - the array to be sorted
 * @return list - success or failure
 */
function sortList(list) {
    let tempList = [];
    let i = list.length;
    while (i--) {
        if (list[i].completed) {
            tempList.push(list[i]);
            list.splice(i, 1);
        }
    }
    return list.concat(tempList);
}

/**
 * @desc Find item from value.
 * @param list - array to find
 * @param value - value to find
 * @return list - success or failure
 */
function findElementByValue(list, value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === value) {
            return list[i];
        }
    }
    return undefined;
}

/**
 * @desc Find index from value.
 * @param list - array to find
 * @param value - value to find
 * @return i - success
 * @return -1 - failure
 */
function findIndexByValue(list, value) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === value) {
            return i;
        }
    }
    return -1;

}

/*
    Find component by id
    @param {id} component's id
 */
function findComponentById(id) {
    return document.getElementById(id);
}