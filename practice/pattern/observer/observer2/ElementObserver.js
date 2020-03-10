class ElementObserver {
    constructor(elementId) {
        this.el = document.querySelector(elementId);
    }
    update(model) {
        this.el.innerHTML = model.number;
        this.el.style.backgroundColor = model.color;
    }
}
