function isAHexadecimalCode(number){
  return (typeof number === "string") && number.length === 7
         && ! isNaN( parseInt(number.substr(1,number.length), 16) );
}
function isAColourName(name)
{
  if (name === "" || name ==="inherit" || name ==="transparent")
  { return false; }

  var image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = name;
  if (image.style.color !== "rgb(0, 0, 0)") { return true; }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = name;
  return image.style.color !== "rgb(255, 255, 255)";
}
function drawAGradient(){
  let direction = document.querySelector("#direction").value;
  let colours = document.querySelector("#colours-names").value;
  let gradientArea = document.querySelector("#gradientArea");
  gradientArea.innerHTML = "";
  gradientArea.style.background = "#fff";
  colours = colours.split(",");
  let flague = 0;
  if(colours.length < 2)
  {
    gradientArea.innerHTML = "Wrong colours. Try again";
  }
  else {
    var final_gradient = "linear-gradient("+direction+",";
    for(var i = 0 ; i < colours.length; i++)
    {
      final_gradient+=colours[i];
      if(i < colours.length-1)
        final_gradient+=",";
    }
    final_gradient+=")";
    gradientArea.style.background = final_gradient;
  }
}
