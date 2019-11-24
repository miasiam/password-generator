var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
var sym = "!@#$%&*+=-!@#$%&*+=-!@#$%&*+=-!@#$%&*+=-!@#$%&*+=-";
var gem = ["amber", "jet", "gold", "jade", "cinn", "pearl", "ruby", "flint", "beryl", "opal", "coral", "topaz"];

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");


submit.addEventListener("click", function(e){

    var characters = null; 
    // (numBox.checked) ? characters += num: "";
    if(numBox.checked){
        characters+=num;
    }
    // (symBox.checked) ? characters += sym: "";
    if(symBox.checked){
        characters+=sym;

    if(numBox.checked && symBox.checked){
            alert("Our generator may have difficulty digging for numbers AND symbols! We opal-ogize!")
            }
    }
    characters += char;
    yourPw.value = password(charNum.value, characters);
});



console.log(password(12,char));

function password(l,characters){
    var pwd = " ";
    var pick_gem = Math.floor(Math.random()*12);
    pwd += gem[pick_gem];
    console.log("Gem is: "+pick_gem+": "+pwd);
    l = l - pwd.length;
    for(var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random()*characters.length));

    }
    return pwd;
}