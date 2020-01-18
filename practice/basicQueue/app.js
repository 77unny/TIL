/**
 * 운영체제, 프로세스, 스레드
 * Queue Data Structures
 */

class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequque = dequque;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}

const enqueue = function(element) {
    return this.dataStore.push(element);
};

const dequque = function() {
    return this.dataStore.shift();
};
const front = function() {
    return this.dataStore[0];
};
const back = function() {
    return this.dataStore[this.dataStore.length - 1];
};
const toString = function() {
    let str = '';
    for (const iterator of this.dataStore) {
        str += iterator;
    }
    return str;
};
const empty = function() {
    if(this.dataStore === 0) return true;
    return false;
};


// TEST CODE
const q = new Queue();
q.enqueue('AAA');
q.enqueue('BBB');
q.enqueue('CCC');
console.log(q.toString());
q.dequque();
console.log(q.toString());
console.log(`Front : ${q.front()}`);
console.log(`Back : ${q.back()}`);




exports.Queue = q;
