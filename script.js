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
var closing = document.getElementById("closing");
var closings = ["Best", "Best Wishes", "Sincerely", "Regards", "Kind regards", "Thank you", "Warm wishes", "Warm regards", "With gratitude", "Many thanks"];
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                checkInput();
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
                
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) {
                x[currentFocus].click();
            }
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
/*initiate the autocomplete function on the "closing" element, and pass along the closings array as possible autocomplete values:*/
autocomplete(closing, closings);

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