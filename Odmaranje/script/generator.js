// Array
let arrayActivity = ["meditacija", "spavanje", "yoga", "film", "sretno", "misli", "disanje", "pivo", "caj"];


// Generator
function generate() {
    for (let i = 0; i < arrayActivity.length; i++) {
        if (document.getElementById(arrayActivity[i]).style.display == "block") {
            document.getElementById(arrayActivity[i]).style.display = "none";
        }
    }

    let random = Math.floor(Math.random() * (arrayActivity.length));
    

    let aktivnost = arrayActivity[random];

    document.getElementById(aktivnost).style.display = "block";

    

}