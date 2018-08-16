import {domList, setDOMList} from './main.js'

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
    const domArray = Array.from(domList);
    return domArray.find(item => item.firstElementChild.id === id);
}

/**
 *  Check to-dos exists or not
 */
export function checkItemList() {
    let placeHolder = findComponentById('placeHolder');
    if (document.querySelectorAll('.wrapper').length === 0){
        placeHolder.classList.remove('check-items');
    }else {
        placeHolder.classList.add('check-items');
    }
}

/**
 *  Load DOM elements
 */
export function loadDOMElements() {
    checkItemList();
    setDOMList(document.querySelectorAll('.wrapper'));
}

