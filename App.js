function lightOff() {
  document.getElementById("bulbimg").src = "./images/bulboff.gif";
  document.body.style.backgroundColor = "white";
}

function lightOn() {
  document.getElementById("bulbimg").src = "./images/bulbon.gif";
  document.body.style.backgroundColor = "black";
  document.getElementById("bulbimg").style.borderRadius = "91px";
  document.getElementById("bulbimg").style.boxShadow =
    "0px 0px 596px 372px #fff";
  document.getElementById("bulbimg").style.backgroundColor = "#fff";
}
