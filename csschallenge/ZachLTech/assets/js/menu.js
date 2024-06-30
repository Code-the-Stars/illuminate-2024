var menu = document.getElementsByClassName("menu");
var j;

for (j = 0; j < menu.length; j++) {
  menu[j].addEventListener("click", function() {
    var menuItem = this.nextElementSibling;
    if (menuItem.style.display === "block") {
      menuItem.style.display = "none";
    } else {
      menuItem.style.display = "block";
    }
  });
}
