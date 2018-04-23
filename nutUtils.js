function nutFunc()
{
  document.getElementById("welcome").innerHTML = "Nutting.";
  document.getElementById("activate").innerHTML = "Click to stop nutting";
  document.getElementById("activate").onclick = nutStop;
  document.getElementById("totodile").style.display = "block";
}

function nutStop()
{
  document.getElementById("welcome").innerHTML = "Thanks for visiting Nut City!!";
  document.getElementById("activate").style.display = "none";
  document.getElementById("totodile").style.display = "none";
}
