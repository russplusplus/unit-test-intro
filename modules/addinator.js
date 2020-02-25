const addinator = function(value1, value2) {
    if (!value2) {
        value2 = 0;
    }
    return parseInt(value1) + parseInt(value2);
}

module.exports = addinator;