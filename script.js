/*
var main = document.getElementById('logo');
var element = document.createElement('rect');


main.appendChild();
*/
// var closing = document.getElementById("closing");
// var cloSel = document.getElementById("closingSelect");
// cloSel.addEventListener('select', function() {
//     closing.value = cloSel.value;
// })
var body = document.getElementById("body");
var nameInput = document.getElementById("name");
var closing = document.getElementById("closing");
var subject = `Hi! I\'m ${nameInput.value}.`;
var a = document.getElementById("submitA");
function checkInput() {
    var element = document.getElementById("value");
    element.style.border = "1px solid";
    subject = `Hi! I\'m ${nameInput.value}.`;
    element.innerHTML = `Subject: ${subject}<br>---<br>Body:<br>${body.value}<br><br>${closing.value},<br>${nameInput.value}`;
    a.addEventListener('click', function () {
        subject = `Hi! I\'m ${nameInput.value}.`;
        var bVal = `Dear Ami,\n${body.value}\n \n${closing.value},\n${nameInput.value}`;
        var href = document.createAttribute('href');
        var encVal = encodeURI(`mailto:someone@example.com?subject=${subject}&body=${bVal}`);
        href.value = encVal;
        a.setAttributeNode(href);
    });
}