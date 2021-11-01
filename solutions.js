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