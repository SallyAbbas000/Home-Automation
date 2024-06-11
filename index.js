console.log("Hello");


var LightB=document.getElementById('light');
var l=0
const Turn=()=>
    {
        console.log("inside Turn()")
        if(l==0)
        {
           LightB.textContent="OFF";
           LightB.style.backgroundColor= "gold";
           LightB.style.color="darkorange";
           LightB.style.boxShadow="3px 3px 3px gold"
            l=1;
        }
        else
        {
            LightB.textContent="ON";
            LightB.style.backgroundColor= "lightblue";
            LightB.style.color="rgb(0, 0, 64)";
            LightB.style.boxShadow="3px 3px 3px lightblue"
            l=0;
        }

    }