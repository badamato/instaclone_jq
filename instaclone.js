var THUMB_IMG = "[data-indiv-img]";
var MAIN_IMG = "[data-target-main]";  
var MY_MODAL = "[data-myModal]";
var IMG_01 = "[data-img01]";
var CAPTION = "[data-caption]";


var $navItems = $(THUMB_IMG);
var $imgTarget = $(MAIN_IMG);
var $modal = $(MY_MODAL);
var $modalImg = $(IMG_01);
var $captionText = $(CAPTION);
var $span = $(".close")[0];



navItems.forEach(function (nav) {
  nav.addEventListener("click", function (event) {
    event.preventDefault();
    imgTarget.setAttribute("src", nav.getAttribute("href"));
  })
});

imgTarget.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

span.onclick = function() { 
    modal.style.display = "none";
}