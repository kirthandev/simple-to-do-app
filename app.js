const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something before adding"); // if input is empty msg will pop up 
    } 
    else {
        let li = document.createElement("li"); // creating a htmml element with Tag li and stored in li variable
        li.innerHTML = inputBox.value; // text we have added the input feild will added in li
        listContainer.appendChild(li); // We are displayed under listContainer 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); // we are displayed under li
    }
    inputBox.value = ''; // clear the input feild once enter 
    saveData(); // Calling a function to  save the data in the browser 


}
listContainer.addEventListener("click",function(e){ // Whenever we click in the container 
    if(e.target.tagName === "LI"){  // It will check where we have clicked : If we clicked on LI 
        e.target.classList.toggle("checked"); // It will add checked class name if there it will remove as we added toggle
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ // if its Span (Into mark) 
        e.target.parentElement.remove(); // Task will be deleted
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Saving the HTML data in local storage 
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data"); // all the content stored in the name of data 
}
showTask() // Calling this func