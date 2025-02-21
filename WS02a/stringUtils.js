function upperCase(str) {
    return str.toUpperCase();
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = { upperCase, reverseString };