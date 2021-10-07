function isLeapYear(year){
    let reminder = year % 4;
    if (reminder == 0) {
        return true
    } else{
        return false;
    }
}

const checkLY = isLeapYear(2000);
console.log(checkLY);