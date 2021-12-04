(function() {
   var button=document.getElementById("add-product");
   button.addEventListener('click', function(event) {
      event.preventDefault();
      var cln = document.getElementsByClassName("form__product")[0].cloneNode(true);
      document.getElementById("form__products").insertBefore(cln,this);
      return false;
   });
})();
