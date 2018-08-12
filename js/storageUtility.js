/**
 * @desc Get data from localStorage
 * @param key - key value to search
 * @return list - success or failure
 */
function getData(key) {
    const LIST_OF_DATA = localStorage.getItem(key);
    return LIST_OF_DATA !== null ? JSON.parse(LIST_OF_DATA) : [];
}

/**
 * @desc Set data to localStorage
 * @param key - key value to store
 * @param value - value to store
 * @return list - success or failure
 */
function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
