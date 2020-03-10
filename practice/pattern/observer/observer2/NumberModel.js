class NumberModel {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this._observers = new Set();
    }
    increment() {
        const colors = ['orange', 'red', 'green', 'blue'];
        this.number++;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.notify();
    }
    addObserver(observer) {
        this._observers.add(observer);
    }
    notify() {
        this._observers.forEach(observer => observer.update(this));
    }
}
