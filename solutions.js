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

// Human Readable Time
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0" + x : x; }
    return pad(parseInt(seconds / (60 * 60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}

// IQ Test
function iqTest(numbers) {
    numbers = numbers.split(" ").map(function(el) { return parseInt(el) });

    var odd = numbers.filter(function(el) { return el % 2 === 1 });
    var even = numbers.filter(function(el) { return el % 2 === 0 });

    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

// The observed PIN
function getPINs(observed) {
    return observed.split('')
        .map(t => ({
            '0': ['0', '8'],
            '1': ['1', '2', '4'],
            '2': ['1', '2', '3', '5'],
            '3': ['2', '3', '6'],
            '4': ['1', '4', '5', '7'],
            '5': ['2', '4', '5', '6', '8'],
            '6': ['3', '5', '6', '9'],
            '7': ['4', '7', '8'],
            '8': ['5', '7', '8', '9', '0'],
            '9': ['6', '8', '9']
        }[t]))
        .reduce((pre, cur) => [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}

// Calculator
const calculator = operation => {

    // verify that the string with the operation has the right format:
    //   - a number
    //   - optionally followed by 0 or more:
    //       - a space
    //       - an operator (+-*/)
    //       - a space
    //       - another number
    if (!operation.match(/^\d+( [\+\-\/\*] \d+)*$/)) return null;

    // easy solution: now that we know the string has the format that we expect, 
    // return (eval(operation));
    // ...but someone did it already, so let's go the long way :P


    // break the string by spaces
    let ops = operation.split(" ");
    let opsSimple = [];

    // multiplication and division take priority
    // we create a new array that will only have numbers and + or -
    for (x = 0; x < ops.length; x++) {
        if (ops[x] === '*') {
            const val = opsSimple.pop();
            opsSimple.push(val * ops[x + 1]);
            x++;
        } else if (ops[x] === '/') {
            // do not allow division by zero!
            if (ops[x + 1] === "0") return "Error! Division by zero!";
            const val = opsSimple.pop();
            opsSimple.push(val / ops[x + 1]);
            x++;
        } else {
            opsSimple.push(ops[x]);
        }
    }

    // calculate the addtiions and substractions sequentially
    let result = parseInt(opsSimple[0]);
    for (x = 1; x < opsSimple.length; x = x + 2) {
        if (opsSimple[x] === '+') {
            result += opsSimple[x + 1];
        } else {
            result -= opsSimple[x + 1];
        }
    }

    return result;
}