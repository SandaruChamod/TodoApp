import {domList,setDOMList} from './main.js'

/**
  *  Find component by id
  * @param id - component's id
  */
export function findComponentById(id) {
    return document.getElementById(id);
}

/**
 *  Find DOM element
 * @param id - component's id
 */
export function findDOMElement(id) {
    const DOM_ARRAY = Array.from(domList);
    return DOM_ARRAY.find(item => item.firstElementChild.id === id);
}

/**
 *  Load DOM elements
 */
export function loadDOMElements() {
    setDOMList(document.querySelectorAll('.wrapper'));
}

