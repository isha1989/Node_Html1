let monthNumber = 11;
let monthName = null;
let monthDays = null;



switch (monthNumber) {
    
    case 1:
        monthName = "January";
        monthDays = 31;
      //  console.log(`${monthName} is the selected month and has ${monthDays}`);
        break;
    case 2:
        monthName = "Feb";
        monthDays = 28;
        break;
    case 3:
        monthName = "Mar";
        monthDays = 31;
        break;
    case 4:
        monthName = "April";
        monthDays = 30;
        break;
    case 5:
        monthName = "May";
        monthDays = 31;
        break;
    case 6:
        monthName = "June";
        monthDays = 30;
        break;
    case 7:
        monthName = "July";
        monthDays = 31;
        break;
    case 8:
        monthName = "Aug";
        monthDays = 31;
        break;
    case 9:
        monthName = "Sep";
        monthDays = 30;
        break;
    case 10:
        monthName = "Oct";
        monthDays = 31;
        break;
    case 11:
        monthName = "Nov";
        monthDays = 30;
        break;
    case 12:
        monthName = "Dec";
        monthDays = 31;
        break;




    default:
        console.log("error");
        break;
}
console.log(`${monthName} is the selected month and has ${monthDays}`);
