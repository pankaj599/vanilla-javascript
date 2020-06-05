var click=document.getElementById("modal");
var maindiv=document.querySelector(".modal");

var closebtn=document.getElementById("close-modal");
click.addEventListener("click",modalopen);
closebtn.addEventListener("click",modalclose);
window.addEventListener("click",clos);
//function()
function modalopen()
{
   
    maindiv.style.display="block";
 
    // click.addEventListener("click",modalclose);
}
function modalclose()
{
maindiv.style.display="none";
//click.addEventListener("click",modalopen);
}
function clos(e)
{
    if(e.target===maindiv)
    {
maindiv.style.display="none";
//click.addEventListener("click",modalopen);
    }
}