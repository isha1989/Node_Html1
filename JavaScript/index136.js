const mutants = ["Professor", "Cyclops", "Iceman", "Angel", "Magneto", "Logan", "Pheonix"]
let selected = "";
mutants.forEach(function (m) {
    if (m == "Iceman" || m == "Logan" || m == "Pheonix") { selected += m + ',' 
    }
});
console.log(selected);