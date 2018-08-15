/**
 * @desc Get data from localStorage
 * @param key - key value to search
 * @return list - success or failure
 */
export function getData(key) {
    const listOfData = localStorage.getItem(key);
    return listOfData !== null ? JSON.parse(listOfData) : [];
}

/**
 * @desc Set data to localStorage
 * @param key - key value to store
 * @param value - value to store
 * @return list - success or failure
 */
export function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
