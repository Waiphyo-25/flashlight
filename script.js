let i;
i = 0; // indicating light is off initially 

function lightOn() {

    if (i === 0) {
        document.getElementById("light").style.visibility = "visible";
        i = 1; // indication light is on initially 
        document.getElementById("button").style.top = "90px";
        document.getElementById("button").style.boxShadow = "0px 5px #666";
    } else {
        document.getElementById("light").style.visibility = "hidden";
        i = 0;// indication light is now off 
    }
}
