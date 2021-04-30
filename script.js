var arrc = ["23.9","18.3","26.7","18.9","20.6","16.1","25.6","21.1"]
var arrf= ["75","65","80","66","69","61","78","70"]

var x=document.querySelectorAll(".high, .low")
function changedeg(type){
    for(let i=0; i<x.length;i++){
        if(type=="C"){
            x[i].innerHTML=arrc[i]
        }
        else{x[i].innerHTML=arrf[i]
        }
    }   
}



var byebox=document.querySelector("#byebox")
function removebox(){
    byebox.remove()
}

