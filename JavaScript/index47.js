let student="isha, nishant, kawal, navjeet, rachita";
let resultArray= student.split(", ");
console.log("Students names:" , resultArray);
let a= typeof(resultArray);
console.log(a);
console.log(Array.isArray(resultArray));

//in order
let resultInOrder= resultArray.sort();
console.log("Students names:" , resultArray);


