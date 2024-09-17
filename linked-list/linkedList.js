var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value) {
        this.nextNode = null;
        this.value = value;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.append = function (value) {
        var node = new LinkedListNode(value);
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.nextNode = node;
            this.tail = node;
        }
    };
    LinkedList.prototype.prepend = function (value) {
        var node = new LinkedListNode(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.nextNode = this.head;
            this.head = node;
        }
    };
    LinkedList.prototype.size = function () {
        var s = 0;
        var currentNode = this.head;
        if (currentNode === null) {
            return s;
        }
        else {
            s++;
            while (currentNode.nextNode != null) {
                s++;
                currentNode = currentNode.nextNode;
            }
            return s;
        }
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.getTail = function () {
        return this.tail;
    };
    LinkedList.prototype.at = function (index) {
        var currentIndex = 0;
        var currentNode = this.head;
        while (true) {
            if (currentIndex === index) {
                if (currentNode != null)
                    return currentNode === null || currentNode === void 0 ? void 0 : currentNode.value;
            }
            if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) != null) {
                currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode;
                currentIndex++;
            }
        }
    };
    LinkedList.prototype.pop = function () {
        var currentNode = this.head;
        if (this.head) {
            if (this.head.nextNode === null) {
                this.head = null;
            }
            else {
                while (true) {
                    if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) != null) {
                        if (currentNode.nextNode.nextNode != null) {
                            currentNode = currentNode.nextNode;
                        }
                        else {
                            currentNode.nextNode = null;
                            break;
                        }
                    }
                }
            }
        }
    };
    LinkedList.prototype.contain = function (value) {
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    };
    LinkedList.prototype.find = function (value) {
        var currentNode = this.head;
        var index = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return index;
            }
            else {
                index++;
                currentNode = currentNode.nextNode;
            }
        }
        return null;
    };
    LinkedList.prototype.toString = function () {
        var currentNode = this.head;
        if (this.head === null) {
            return "null";
        }
        else {
            var stringList = "";
            while (currentNode !== null) {
                stringList += "( ".concat(currentNode.value, " ) -> ");
                currentNode = currentNode.nextNode;
            }
            stringList += "null";
            return stringList;
        }
    };
    return LinkedList;
}());
var list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
