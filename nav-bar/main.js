var clos=document.getElementById("close");
var swp=document.querySelector(".index");
var x=false;

//add event listener
clos.addEventListener("click",swap);
//function()
function swap()
{
    if(x)
    {
        swp.style.left="-400px";
        x=false;
    }
    else
    {
        swp.style.left="0";
        x=true;
    }
}