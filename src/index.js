document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form  =  document.getElementById("create-task-form")
let list = document.getElementById("tasks")


form.addEventListener("submit", function(event){
  event.preventDefault();

let newTaskDesc = document.getElementById("new-task-description").value
let li = document.createElement("li")

li.innerText = newTaskDesc

list.appendChild(li)
})
});
