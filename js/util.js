/**
 *  Find component by id
 * @param id - component's id
 */
function findComponentById(id) {
    return document.getElementById(id);
}

/**
 *  Find DOM element
 * @param id - component's id
 */
function findDOMElement(id) {
    const array = Array.from(domList);
    return array.find(item => item.firstElementChild.id === id);
}

/**
 *  Load DOM elements
 */
function loadDOMElements() {
    domList = document.querySelectorAll('.wrapper');
}

