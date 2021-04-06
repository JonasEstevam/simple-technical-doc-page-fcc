function openNav() {
  document.getElementById("icon").innerHTML = "close";
  document.getElementById("icon-link").setAttribute("onclick", "closeNav()");
  document.getElementById("navbar").style.height = "unset";
  document.getElementById("navbar").style.padding = "4vh";
}

function closeNav() {
  document.getElementById("navbar").style.height = "0";
  document.getElementById("navbar").style.padding = "0";
  document.getElementById("icon-link").setAttribute("onclick", "openNav()");
  document.getElementById("icon").innerHTML = "menu";
}
