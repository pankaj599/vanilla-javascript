var a=document.querySelector("#input");
var doc=document.getElementById("divdata");
a.addEventListener("input",value)
function value()
{
    const b=a.value.toUpperCase();
    //console.log(b);
    fetch("state.json")
    .then(resp=>resp.json())
    .then(data=>{
        //console.log(data);
        var c="";
        data.forEach(con=>
            {
            
               
                if(`${con.name}`.toUpperCase().indexOf(b)>-1)
                {
                c+=`<ul>
                <li>${con.name}</li>
                <small>${con.capital}</small>
                </ul>`;
              
                }
                //console.log(c);
            });
            doc.innerHTML=c;
            // document.getElementById("divdata").innerHTML=c;
    })
    .catch(error=>console.log(error));
}

