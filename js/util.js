/**
 * @desc Sort list
 * @param list - the array to be sorted
 * @return list - success or failure
 */
function sortList(list) {
    let completedList = [];
    let inCompletedList = [];
    completedList = list.filter(function (item) {
        if (item.completed === true) {
            return item;
        } else {
            inCompletedList.push(item);
        }
    });
    return inCompletedList.concat(completedList);
}

/*
    Find component by id
    @param {id} component's id
 */
function findComponentById(id) {
    return document.getElementById(id);
}