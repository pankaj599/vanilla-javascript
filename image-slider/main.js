var next= document.getElementById("next");
var prev= document.getElementById("prev");
var slide=document.getElementsByClassName("slide");
var auto=true;
 if(auto)
 {
     var slideInterval=setInterval(right,5000);
 }
//event
var i=0;
var a=0;
next.addEventListener("click",right);
prev.addEventListener("click",left);
//function
function right()
{
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(right,5000);
      }
    let current=document.querySelector(".current");
    current.classList.remove("current");
    if(current.nextElementSibling)
    {
        current.nextElementSibling.classList.add("current");
    }
    else
    {
        slide[0].classList.add("current");
    }
}
function left()
{
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(left, 5000);
      }
    let current=document.querySelector(".current");
    current.classList.remove("current");
    if(current.previousElementSibling)
    {
        current.previousElementSibling.classList.add("current");
    }
    else
    {
        slide[2].classList.add("current");
    }
}
function load()
{
    if(auto)
    {
        right();
        auto=true;
    }
    else
    {
        left;
    }
}