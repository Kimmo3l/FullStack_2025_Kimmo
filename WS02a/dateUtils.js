function getCurrentDate(date) {
    return new Date();
}

function formatDate(date) {
    return new Date().toISOString().split('T')[0];
}

module.exports = { getCurrentDate, formatDate };