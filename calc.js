
let explation = ""
let svn = document.getElementById("seven")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let cleanBtn = document.getElementById("clean1")
let parcent = document.getElementById("percent")
let minus = document.getElementById("minus")
let mult = document.getElementById("mult")
let addition = document.getElementById("addition")
let division = document.getElementById("division")
let equal = document.getElementById("equal")
let delet = document.getElementById("delet")
let bracket = document.getElementById("bracket")
let dot = document.getElementById("dot")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")



svn.addEventListener("click", function () {
    textField = document.getElementById("explation");
    textField.value += 7


})
b2.addEventListener("click", function () {
    let textField = document.getElementById("explation").value += ")";
})
    

b1.addEventListener("click", function () {
    let textField = document.getElementById("explation").value += "(";
})



delet.addEventListener("click", function () {
    let textField = document.getElementById("explation");
    let currentvalue = textField.value;
    currentvalue = currentvalue.slice(0, -1);
    textField.value = currentvalue;




})
one.addEventListener("click", function () {
    let textField = document.getElementById("explation");
    textField.value += 1



})
two.addEventListener("click", function () {
    document.getElementById("explation").value += 2;

})
three.addEventListener("click", function () {
    document.getElementById("explation").value += 3;




})
four.addEventListener("click", function () {
    document.getElementById("explation").value += 4;

})

five.addEventListener("click", function () {
    document.getElementById("explation").value += 5;

})

six.addEventListener("click", function () {
    document.getElementById("explation").value += 6;

})
eight.addEventListener("click", function () {
    document.getElementById("explation").value += 8;

})
nine.addEventListener("click", function () {
    document.getElementById("explation").value += 9;

})
zero.addEventListener("click", function () {
    document.getElementById("explation").value += 0;

})

cleanBtn.addEventListener("click", function () {
    textField = document.getElementById("explation").value = "";


})
division.addEventListener("click", function () {
    document.getElementById("explation").value += "/";

})
addition.addEventListener("click", function () {
    document.getElementById("explation").value += "+";
    function addition() { }

})
mult.addEventListener("click", function () {
    document.getElementById("explation").value += "*";

})

equal.addEventListener("click", function () {
    let textField = document.getElementById("explation").value;
    str = textField;
    document.getElementById("explation").value =eval(str)



})
minus.addEventListener("click", function () {
    document.getElementById("explation").value += "-";

})


dot.addEventListener("click", function () {
    textField = document.getElementById("explation").value += " . ";

})

parcent.addEventListener("click", function () {
    textField = document.getElementById("explation").value += " % ";

})




