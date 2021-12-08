// (function() {
//    var button=document.getElementById("add-product");
//    button.addEventListener('click', function(event) {
//       event.preventDefault();
//       var cln = document.getElementsByClassName("form__product")[0].cloneNode(true);
//       document.getElementById("form__products").insertBefore(cln,this);
//       return false;
//    });
// })();

var regex = /^(.+?)(\d+)$/i;
var cloneIndex = $(".form__product").length;

function clone(){
    $(this).parents(".form__product").clone()
        .appendTo("form__products")
        .attr("id", "form__product" +  cloneIndex)
        .find("*")
        .each(function() {
            var id = this.id || "";
            var match = id.match(regex) || [];
            if (match.length == 3) {
                this.id = match[1] + (cloneIndex);
            }
        })
        .on('click', 'button.form__button', clone)
    cloneIndex++;
}
// function remove(){
//     $(this).parents(".clonedInput").remove();
// }
$("button.form__button").on("click", clone);

// $("button.remove").on("click", remove);