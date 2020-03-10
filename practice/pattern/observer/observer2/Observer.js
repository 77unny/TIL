export default class Observer {
    constructor(){
        this._observer = new Set();
    }
    addObserver(observer) {
        this._observer.add(observer);
    }
    removeObserver(observer){
        this._observer.delete(observer)
    }
    notify(data) {
        this._observers.forEach(observer => observer(data));
    }
}