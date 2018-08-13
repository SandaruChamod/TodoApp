export default class Todo{
    constructor(itemName,completed){
        this._itemName = itemName;
        this._completed = completed;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }


}
