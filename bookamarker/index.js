//fetching value
load();
var a=document.getElementById("sitename")
var b=document.getElementById("url");
var c=document.getElementById("submit");


//event listener
c.addEventListener("click",fun);
//functions
function fun(e)
{
    var data={
    site:a.value,
    url:b.value
    }

//console.log(data);
    e.preventDefault();
  if(localStorage.getItem("bookmark")===null)
  {
      var bookmark=[];
      //pushing data(object) to array
      if(data.site!="")
      {
      bookmark.push(data);
      
    //   console.log(bookmark);
      localStorage.setItem("bookmark",JSON.stringify(bookmark));
      }
      //console.log((localStorage.getItem("bookmark")));
  }else{
      var bookmark2=JSON.parse(localStorage.getItem("bookmark"));
      //console.log(bookmark2[0].site);
      if(data.site!="")
      {
      bookmark2.push(data);
      
      localStorage.setItem("bookmark",JSON.stringify(bookmark2));
      }
  }
  a.value="";
  b.value="";
  load();
 
}
function load()
{
  //localStorage.removeItem("bookmark");
  var arr=JSON.parse(localStorage.getItem("bookmark"));
  var put="";
    var put="";
    for(let i=0;i<arr.length;i++)
    {
      var web=arr[i].site;
      var domain=arr[i].url;
      //console.log(web);
      //console.log(web);
     
      put+='<div class="well"><h3>'+web+
      '<a class="btn btn-primary"'+
      'href="'+domain+'" target="_blank">Visit'+
      '</a></h3>'+
      '<h3><button class="btn btn-danger"'+
       'onclick="del(\''+web+'\')">Delete'+
      '</button></h3></div>';
    }
    document.getElementById("box2").innerHTML=put;
}
function del(web)
{
  //console.log(web);
  var f=JSON.parse(localStorage.getItem("bookmark"));
  for(let i=0;i<f.length;i++)
  {
    if(f[i].site==web)
    {
      f.splice(i,1);
    }
  //localStorage.setItem("bookmark",JSON.stringify(f));
  }
  localStorage.setItem("bookmark",JSON.stringify(f));
  load();
}