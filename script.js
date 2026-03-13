let tasks = [];
let currentFilter = "all";

function addTask(){

let input = document.getElementById("taskInput");
let text = input.value.trim();

if(text==="") return;

tasks.push({name:text,done:false});

input.value="";

showTasks();
}

function showTasks(){

let list = document.getElementById("taskList");

list.innerHTML="";

let filtered = tasks;

if(currentFilter==="active"){
filtered = tasks.filter(t=>!t.done);
}

if(currentFilter==="completed"){
filtered = tasks.filter(t=>t.done);
}

filtered.forEach((task,index)=>{

let li = document.createElement("li");

li.textContent = task.name;

if(task.done){
li.classList.add("done");
}

li.onclick = function(){
task.done = !task.done;
showTasks();
}

list.appendChild(li);

});

let activeCount = tasks.filter(t=>!t.done).length;

document.getElementById("count").textContent =
activeCount + " tasks remaining";
}

function showAll(){
currentFilter="all";
showTasks();
}

function showActive(){
currentFilter="active";
showTasks();
}

function showCompleted(){
currentFilter="completed";
showTasks();
}

function clearCompleted(){
tasks = tasks.filter(t=>!t.done);
showTasks();
}