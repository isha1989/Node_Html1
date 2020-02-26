let number = 5;
let message = null;
switch (number) {
    case 1:
        message = "Today it's Monday";
        break;
    case 2:
        message = "Today it's Tuesday";
        break;
    case 3:
        message = "Today it's Wed";
        break;
    case 4:
        message = "Today it's Thu";
        break;
    case 5:
        message = "Today it's Fri";
        break;
    case 6:
        message = "Today it's Sat";
        break;
    case 7:
        message = "Today it's Sunday";
        break;
    default:
        message = "Error: Please input a number bettwen 1 and 7";
}
console.log(message);