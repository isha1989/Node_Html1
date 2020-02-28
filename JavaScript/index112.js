let start, end;


function showNumbers(start, end) {
    if (typeof (start) == typeof (end)) {
        if (start > end) {
            console.log(`${start} is bigger than ${end}, higher to lower`);
        }
        else if (end > start) {
            console.log(`${start} is smaller than ${end}, lower to higher`);
        }
        else {
            console.log("both are same numbers")
        }
    }
    else {
        console.log("error");
    }
}
showNumbers(0, 100);
showNumbers(100, 0);
showNumbers(100, 100);
showNumbers("100", 300);