const Node = function(element) {
    this.element = element;
    this.next = null;
};

const LinkedList = function() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    // this.remove = remove;
    this.display = display;
};

function find(item) {
    let currentNode = this.head;
    while (currentNode.element != item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    let currentNode = this.head;
    while (!(currentNode === null)) {
        // console.log(currentNode)
        console.log(currentNode.element);
        currentNode = currentNode.next;
    }
}

const cities = new LinkedList();
cities.insert('Conway', 'head');
cities.insert('Alma', 'Conway');
cities.insert('Korea', 'Alma');
cities.display();
