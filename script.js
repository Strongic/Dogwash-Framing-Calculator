const recipes = {
    "DW2 Wall": {
        "4x8' OSB": {
            totalBoardsNeeded: 1,
            yieldPerBoard: 1,
            cutPiecesNeeded: 1,
            cutLength: "84\""

        },
        "2x4x8' Board": {
            totalBoardsNeeded: 4,
            yieldPerBoard: 1,
            cutPiecesNeeded: 4,
            cutLength: "79\"" //double check length
        }

    },

    "DW2 Pallet": {
        "2x8x8' Board": {
            totalBoardsNeeded: 2,
            yieldPerBoard: 1,
            cutPiecesNeeded: 2,
            cutLength: "84\""
        },

        "2x6x8' Board": {
            totalBoardsNeeded: 2, //overlap since we will have remainder of 2
            yieldPerBoard: 3,
            cutPiecesNeeded: 4,
            cutLength: "30\""
        },
        "4x6x8' Board": {
            totalBoardsNeeded: 1, //overlap b/c we will have remainder
            yieldPerBoard: 12,
            cutPiecesNeeded: 8,
            cutLength: "8\""
        },
        "1x6x8' Board": {
            totalBoardsNeeded: 2,
            yieldPerBoard: 1,
            cutPiecesNeeded: 2,
            cutLength: "84\""
        },
    },

    "Mini Wall": {
        "4x8' OSB": {
            totalBoardsNeeded: 1,
            yieldPerBoard: 1,
            cutPiecesNeeded: 1,
            cutLength: "74\""
        },

        "2x4x8' Board": {
            totalBoardsNeeded: 3,
            yieldPerBoard: 1,
            cutPiecesNeeded: 3,
            cutLength: "69\"" //double check length
        },

    },

    "Mini Pallet": {
        "2x8x8' Board": {
            totalBoardsNeeded: 2,
            yieldPerBoard: 1,
            cutPiecesNeeded: 2,
            cutLength: "74\""
        },

        "2x6x8' Board": {
            totalBoardsNeeded: 1,
            yieldPerBoard: 3,
            cutPiecesNeeded: 3,
            cutLength: "30\""
        },
        "4x6x8' Board": {
            totalBoardsNeeded: 1, //overlap b/c we will have remainder
            yieldPerBoard: 12,
            cutPiecesNeeded: 6,
            cutLength: "8\""
        },
        "1x6x8' Board": {
            totalBoardsNeeded: 2,
            yieldPerBoard: 1,
            cutPiecesNeeded: 2,
            cutLength: "74\""
        },
    },
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
    const qty = document.getElementById('quantity').value; //grab the number of quantities
    const outputDiv = document.getElementById('result');
    const ingredients = recipes[savedChoice] // get specific recipe 

    // if (!ingredients) {
    //     console.log("0 was inputted");
    //     return;
    // }

    console.log("Ingredients found for " + savedChoice + ":", ingredients);

    //build header
    let resultHTML = `<h2>Production Order: ${qty}x ${savedChoice}(s)</h2>`;
    resultHTML += `<p><em>Based on infinite stock (ignoring board remainders)</em></p>`;
    resultHTML += `<hr><h3>Total Cut List</h3><ul>`;



    for (const materialName in ingredients) {
        const data = ingredients[materialName];

        //pieces per unit * total units
        const totalPieces = data.cutPiecesNeeded * qty;

        resultHTML += `
            <li style="margin-bottom: 10px;">
                <strong>${totalPieces} pieces</strong> of ${materialName} 
                <br>Cut to length: <strong>${data.cutLength}</strong>
            </li>`;
    }


    resultHTML += "</ul>";

    //push to html
    outputDiv.innerHTML = resultHTML;
}