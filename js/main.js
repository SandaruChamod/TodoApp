import {addDOMItem} from './add.js'
import {getData} from './storage-util.js'
import {loadDOMElements} from "./util.js"
import {onCompletButtonClick} from './complete.js'
import {onBlurFromBody, onKeyDown} from './update.js'
import {onDeleteButtonClick} from './delete.js'

/*
    Array for store to-dos
 */
export var dataList;

/*
    Array for store DOM elements
 */
export var domList=[];

/**
 * @desc Document load event.
 */
window.onload = function () {
    dataList = getData('todoList');
    if (dataList.length > 0) {
        for (let i=0;i<dataList.length;i++)addDOMItem(dataList[i]._itemName,dataList[i]._completed);
        domList = document.querySelectorAll('.wrapper');
    }else {
        loadDOMElements();
    }
};

/**
 * @desc Reload page.
 */
export function reloadPage() {
    document.location.reload(true);
}

/**
 * @desc Set data to dataList.
 * @param list - list of data to add
 */
export function setDataList(list) {
    dataList = list;
}

/**
 * @desc Set data to domList.
 * @param list - list of data to add
 */
export function setDOMList(list) {
    domList = list;
}

/**
 * @desc Push data to dataList.
 * @param data - data to push
 */
export function pushDataToDataList(data) {
    dataList.push(data);
}

/**
 * @desc Splice data from dataList.
 * @param index - index to splice
 */
export function spliceFromDataList(index) {
    dataList.splice(index, 1);
}

/**
 * @desc Init module methods for DOM use
 */
export function initFunctions() {
    window.toDoFunctions = {
        onCompletButtonClick: onCompletButtonClick,
        onDeleteButtonClick: onDeleteButtonClick,
        onKeyDown: onKeyDown,
        onBlurFromBody: onBlurFromBody
    };
}
