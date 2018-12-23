var button = document.querySelector(".button-to-popup");
        var popup = document.querySelector(".popup");
        var form = popup.querySelector(".form-search");
        var inputdatein = form.querySelector("#date-in");
        var inputdateout = form.querySelector("#date-out");
        var inputcountmen = form.querySelector("#count-men");
        var inputcountchildren = form.querySelector("#count-children");
        
        button.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.toggle("popup-show");
  });
        form.addEventListener("submit", function (evt) {
    if (!inputdatein.value || !inputdateout.value || !inputcountmen.value || !inputcountchildren.value) {
      evt.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-error");   
  }});
