const recipes = {
    "DW2 Wall": { "OSB Sheets": 2, "2x4 Studs": 4 },
}

let savedChoice = ""; //global variable for storing what option the user clicked

function selectOption(name) {
    savedChoice = name; //store option

    // find the div with the ID
    const inputSection = document.getElementById('calculator-input');
    inputSection.style.display = "block";

    document.getElementById('selected-item-name').innerText = "Building: " + name;
    console.log("System ready for: " + savedChoice);
}

function performCalculation() {
    const userNumber = document.getElementById('quantity').value; //grab the number of quantities

    const ingredients = recipes[savedChoice] // get specific recipe from the table

    for (const item in ingredients) {
        let totalNeeded = ingredients[item] * userNumber;
        console.log("You need " + totalNeeded + " of " + item);
    }
}