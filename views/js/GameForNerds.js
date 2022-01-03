var gEntreeCount = 0;
// returns a number that represents the sum of all the selected game menu
function calculateBill(idMenuTable) {
    var fBillTotal = 0.0;
    var i = 0;
    // find the game tag
    var oGame = document.getElementById(idMenuTable);
    // go through the table and add up the prices of all
    // the selected games. The code takes advantage of the 
    // fact that each checkbox has a corresponding row in
    // the table, and the only INPUT tags are the checkboxes.
    var aCBTags = oGame.getElementsByTagName('INPUT');
    for (i = 0; i < aCBTags.length; i++) {
        // is this game selected? it is if the checkbox is checked
        if (aCBTags[i].checked) {
            // get the checkbox' parent table row
            var oTR = getParentTag(aCBTags[i], 'TR');

            // retrieve the price from the price column, which is the third column in the table
            var oTDPrice = oTR.getElementsByTagName('TD')[2];
            // the first child text node of the column contains the price
            fBillTotal += parseFloat(oTDPrice.firstChild.data);
        };
    };
    // return the price as a decimal number with 2 decimal places
    return Math.round(fBillTotal * 100.0) / 100.0;
};
// This function either turns on or off the row highlighting for multiplayer games
function highlightMultiplayer(idTable, bShowMulti) {
    // if bShowMulti is true, then we're highlighting multiplayer games
    // otherwise we're unhighlighting them.
    var i = 0;
    var oGame = document.getElementById(idTable);
    var oTBODY = oGame.getElementsByTagName('TBODY')[0];
    var aTRs = oTBODY.getElementsByTagName('TR');
    // walk through each of the table rows and see if it has a multiplayer attribute on it.
    for (i = 0; i < aTRs.length; i++) {
        if (aTRs[i].getAttribute('multiplayer') && aTRs[i].getAttribute('multiplayer') == "true") {
            if (bShowMulti) {
                aTRs[i].style.backgroundColor = "lightBlue";
            } else {
                aTRs[i].style.backgroundColor = "";
            };
        };
    };
};
// Utility function for getting the parent tag of a given tag
// but only of a certain type (i.e. a TR, a TABLE, etc.)
function getParentTag(oNode, sParentType) {
    var oParent = oNode.parentNode;
    while (oParent) {
        if (oParent.nodeName == sParentType)
            return oParent;
        oParent = oParent.parentNode;
    };
    return oParent;
};
window.addEventListener("load", function () {
    document.forms[0].txtBillAmt.value = calculateBill('menuTable');
    document.querySelector("#calcBill").addEventListener("click", function () {
        document.forms[0].txtBillAmt.value = calculateBill('menuTable');
    });
    document.querySelector("#ShowMulti").addEventListener("click", function () {
        highlightMultiplayer('menuTable', this.checked);
    });
});

function cart() {
    var txt;
    if (confirm("Add this item to your Cart?")) {
        
      alert("Item added to your cart!");
        
      document.getElementById("ShowMulti").reset();
     
    } else {
      
    }
    document.getElementById("demo").innerHTML = txt;
  }

  var comboObject = {
    "Combo A": {
      "The Sims": ["€ 50.00"],
      "Minecraft": ["€ 80.00"],
      "Combo A": ["€ 110.00"]    
    },
    "Combo B": {
      "Minecraft": ["€ 49.90"],
      "Age of Empires": ["€ 94.25"],
      "Combo B": ["€ 119.50"] 
    },
    "Combo C": {
      "Fortnite": ["€ 120.00"],
      "Call of Duty": ["€ 119.00"],
      "Combo C": ["€ 200.00"] 
    },
  "Combo D": {
    "Dota 2": ["€ 99.50"],
    "League of Legends": ["€ 86.75"],
    "Combo D": ["€ 150.65"] 
  },
  "Combo E": {
    "Dungeons & Dragons": ["€ 49.95"],
    "The Witcher 3": ["€ 65.25"],
    "Combo E": ["€ 99.75"] 
  }
}
