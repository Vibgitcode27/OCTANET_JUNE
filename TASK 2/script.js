let input = document.getElementById("input");
var ul = document.getElementById("todo-ul");

AddTask = () => {
    let new_li = document.createElement("li");
    new_li.innerHTML = input.value;
    ul.appendChild(new_li);

    // appending tick mark in list items
    let tick = document.createElement("b")
    tick.innerHTML = "&#10003;";
    new_li.appendChild(tick)

    // append cross mark in list items
    let cross = document.createElement("i")
    cross.innerHTML = "&#10005;"
    new_li.appendChild(cross)

    // Clearing value at search box
    input.value = ""
 }

 ul.addEventListener("click" , function(press){
    if(press.target.tagName === "B")
    {
    press.target.parentElement.classList.toggle("marked");
    }
    else if(press.target.tagName === "I")
    { 
    press.target.parentElement.remove();
    } 
} , false);