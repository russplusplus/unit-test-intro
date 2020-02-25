const isLeapYear = function(year) {
    let response = false;
    if (year % 4 == 0) {
        response = true;
        if (year % 100 == 0) {
            response = false;
            if (year % 400 == 0) {
                response = true;
            }
        }
    }
    return response;
}

module.exports = isLeapYear;