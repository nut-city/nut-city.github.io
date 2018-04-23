function nutFunc()
{
  document.getElementById("welcome").innerHTML="Nutting.";
  document.getElementById("activate").innerHTML="Done?";
  document.getElementById("totodile").style.display="block";
}

function nutStop()
{
  document.getElementById("welcome").innerHTML="Thank you for visiting Nut City!";
  document.getElementById("totodile").style.display="none";
  document.getElementById("activate").style.display="none";
}
