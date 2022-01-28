function printHello(){
    console.log("Hello World")
    alert("Hello");
}

function changeHeading(){
    if(document.getElementById("homeHeading").innerHTML == "Home"){
        document.getElementById("homeHeading").innerHTML = "Bahay"
    }
    else{
        document.getElementById("homeHeading").innerHTML = "Home"
    }
    
}