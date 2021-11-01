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

// Your order, please
function order(words) {
    return words.split(' ').sort(function(a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

// Which are in?
function inArray(array1, array2) {
    const _match = []
    for (let i = 0; i < array2.length; i++) {
        for (let x = 0; x < array1.length; x++) {
            const a1El = array1[x];
            const a2El = array2[i];
            if (a2El.includes(a1El)) { _match.push(a1El) }
        }
    }
    return _match.filter((el, i, a) => a.indexOf(el) === i).sort((a, b) => {
        const _a = a.toLowerCase();
        const _b = b.toLowerCase();
        if (_a < _b) { return -1; }
        return 1;
    })
}