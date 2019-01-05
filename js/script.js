var button = document.querySelector(".button-to-popup");
var popup = document.querySelector(".popup");
var inputdatein = popup.querySelector("#date-in");
var inputdateout = popup.querySelector("#date-out");
var inputcountmen = popup.querySelector("#count-men");
var inputcountchildren = popup.querySelector("#count-children");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("popup-show");
  });
    popup.addEventListener("submit", function (evt) {
        if (!inputdatein.value || !inputdateout.value || !inputcountmen.value || !inputcountchildren.value) {
            evt.preventDefault();
            popup.classList.remove("popup-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("popup-error");   
  }});
