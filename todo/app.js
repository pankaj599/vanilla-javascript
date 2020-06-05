//selectors
const todoinput=document.querySelector(".todoinput");
const todobutton=document.querySelector(".todobutton");
const todolist=document.querySelector(".todolist");
const todoselect=document.querySelector(".todoselect");

//eventlistener
todoselect.addEventListener("click",handler);
todobutton.addEventListener("click",table);
todolist.addEventListener("click",delcheck);  //instead of applying event to each button we will taking it as a whole block and use target method to specify which is clicked..

//function
function table(event)
{
    event.preventDefault();
    //console.log("hello");
    /**
     * craeting structure of
     *  <div class="tododiv col-lg-6 offset-md-3 mt-5">
                    <li class="todoli"></li>
                    <button class="todocheck btn btn-primary">check</button>
                    <button class="tododelete btn btn-success">delete</button>
                </div>
     */
    //div
    var todiv=document.createElement("div");
    todiv.classList.add("tododiv","col-lg-6","offset-md-3","mt-5");
    //li
    var tolist=document.createElement("li");
    tolist.classList.add("todoli");
    tolist.innerText=todoinput.value; //inserting value from the input of form tag
    todiv.appendChild(tolist);  //linking to div
    //button check
    var tocheck=document.createElement("button");
    tocheck.classList.add("todocheck","btn","btn-primary");
    tocheck.innerText="Check"
    todiv.appendChild(tocheck);
    //button delete
    const todel=document.createElement("button");
    //todel.classList.add("tododelete");
    todel.classList.add("tododel","btn","btn-success");
    todel.innerText="Delete";
    todiv.appendChild(todel);

    todolist.appendChild(todiv);
    todoinput.value=""; //after the data is inserted it will clean the input tag
}

//delete and inserting function
function delcheck(e)
{
    //console.log(e.target); //using target method to see which is clicked
    var item=e.target;
    //console.log(item.classList[1]);
    if(item.classList[0]==="tododel") //item.classList[] gives the classes in the form of array, if check button is clicked then 0 index show todochek, 1 will show btn and 2 will show btn-primary. 
    {
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener("transitionend",function()
        {
       item.parentElement.remove();
        });
    }
    if(item.classList[0]==="todocheck")
    {
        //todiv.classList.add("toggle");
        
        item.parentElement.firstChild.classList.toggle("toggle");//toggle is a class which we are applying to it when event occurs
    }
}
function handler(x)
{
    var y= todolist.childNodes;
    //console.log(y);
    //todos=x.target.parentElement;
    y.forEach(function(todos)
    {
        //console.log(x.target.value);
        switch(x.target.value)
        {
          
            case "all":
                //todos.style.color="red";
                console.log(todos);
                break;
                case "completed":
                    if(todos.classList.contains("toggle"))
                    {
                        todos.style.display="flex";
                    }
                    else{
                        todos.style.display="none";
                    }
                    break;

        }     
        //console.log(todos);
    });

}