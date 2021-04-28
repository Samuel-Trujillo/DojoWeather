var arrc = ["23.9","18.3","26.7","18.9","20.6","16.1","25.6","21.1"]
var arrf= ["75","65","80","66","69","61","78","70"]

var high=document.querySelector(".high")
var low=document.querySelector(".low")

function changetype(){
    high.innerHTML= (high - 32) * 5 / 9;
    low.innerHTML= (low -32) * 5/9;
}

// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;

// } 
// cToF(60);
// fToC(45);


var byebox=document.querySelector("#byebox")
function removebox(){
    byebox.remove()
}

