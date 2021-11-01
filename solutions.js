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

// Does my number look big in this?
function narcissistic(value) {
    const _value = String(value).split('');
    let _result = 0;
    for (ch of _value) {
        const num = parseInt(ch, 0);
        _result += Math.pow(num, _value.length);
    }
    return _result === value;
}

// Detect Pangram
function isPangram(string) {
    const a = 'abcdefghijklmnopqrstuvwxyz';
    const b = string.toLowerCase();

    for (let i = 0; i < a.length - 1; i += 1) {
        if (b.indexOf(a[i]) === -1) {
            return false;
        }
    }
    return true;
}

// Regex validate PIN code
function validatePIN(pin) {
    return (/^[0-9]{4}$|^[0-9]{6}$/).test(pin);
}

// Unique In Order
var uniqueInOrder = function(iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1])
}

// You're a square!
var isSquare = function(n) {
    let a;
    for (let i = 0; i < n + 1; i++) {
        a = n / i;
        if (i === a) {
            return true;
        }
    }
    if (n < 0) { return false; } else if (a == 1) { return false; } else { return true; }
}

// Tribonacci Sequence
function tribonacci(signature, n) {
    if (n === 0) { return []; } else if (n === 1) { return [1]; } else {
        for (let i = 3; i <= n; i++) {
            signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
        }
        signature.pop();
        return signature;
    }
}