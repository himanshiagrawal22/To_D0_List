const inpbox=document.getElementById("textbox");
const containerli=document.getElementById("listcontainer");
function addContent()
{
    if(inpbox.value==='')
        {
            alert("You have to write something!");
        }
        else{
    let li=document.createElement("li");
    li.innerHTML=inpbox.value;
    containerli.appendChild(li);
    let spantag=document.createElement("span");
    spantag.innerHTML="\u00d7";
    li.appendChild(spantag);
}
inpbox.value='';
saveContent();
}


containerli.addEventListener("click",function(e)
{
   if(e.target.tagName==="LI") {
e.target.classList.toggle("checked");
saveContent();
    } 
    else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
saveContent();
    }
});

function saveContent()
{
    localStorage.setItem("data",containerli.innerHTML);
}
function showContent()
{
    containerli.innerHTML=localStorage.getItem("data");
}
showContent();