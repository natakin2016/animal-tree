const readline = require('readline');

var yes=true
var no=false
function vertebrate(){
//Do you want to have jaws or no jaws?
    console.log("Do you want to have jaws or no jaws?")
    var select=readline()
    if (select==="yes"){
        console.log("You have Jaws")
        cyclostomata()
    }
    else{
        console.log("You have no Jaw")
        gnathostomata
    }
}
vertebrate()