// Where my anagrams at?
function anagrams(word, words) {
    return words.filter(function(item) {
        return item.split('').sort().join('') === word.split('').sort().join('');
    });
}

// Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

// The Supermarket Queue
function queueTime(customers, n) {
    var arr = new Array(n).fill(0);
    for (var i = 0; i < customers.length; i++) {
        var idx = arr.indexOf(Math.min(...arr));
        arr[idx] += customers[i];
    }
    return Math.max(...arr);
}