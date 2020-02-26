const text= "Game of thrones";
let firstChar;
let secondChar;
let thirdChar;
firstChar=text.charAt(0);
secondChar=text.charAt(5);
thirdChar=text.charAt(8);
let resultName= firstChar + secondChar + thirdChar;
let resultName1=firstChar.concat(secondChar, thirdChar);
let final= resultName.toUpperCase();
let final1=resultName1.toUpperCase()
console.log(`he final result is:  ${final}`);
console.log(`he final result is:  ${final1}`);
console.log("invalid index number" + text.charAt(9000));

