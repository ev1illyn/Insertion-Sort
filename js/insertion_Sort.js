function InsertionSort() {
    var items = []
    this.insert = function(element) {
        if (!items.includes(element)) items.push(element);
    };
    this.sort = function() {
        for (var i=1; i<items.length; i++) {
            while(items[i]<items[i-1]) {
                items.splice(items.indexOf(items[i-1]), 2, items[i], items[i-1]);
                i--;
            }
        }
    };
    this.index = function(element) {
        return items.indexOf(element);
    }
    this.length = function() {
        return items.length
    }
    this.isEmpty = function() {
        return items.length == 0;
    }
    this.clear = function() {
        items = []
    }
    this.print = function(separator) {
        if (!separator) separator = ',';
        return items.join(separator);
    }
}