let base, height;

function getShapePerimiter(base, height) {
    if (base === height) {
        let per1 = 4 * base;

        console.log(per1);
        if (per1 > 100) {
            console.log("The perimiter is to big");
        }
        else {
            console.log("perimeter is fine");
        }
    }
    else {
        let per2 = 2*(base + height);
        console.log(per2);
        if (per2 > 100) {
            console.log("The perimiter is to big");
        }
        else {
            console.log("perimeter is fine");
        }
    }
}

getShapePerimiter(10, 20);
