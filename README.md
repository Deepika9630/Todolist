# Ex03 To-Do List using JavaScript
## Date:13.02.2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
### index.html:
```
<!DOCTYPE html>
<html>
<head>
<title>My Task Manager</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

<h2>My Task Manager</h2>

<div class="input-box">
<input type="text" id="taskInput" placeholder="Write your task here">
<button onclick="addTask()">Add Task</button>
</div>

<ul id="taskList"></ul>

<div class="filters">
<button onclick="showAll()">All</button>
<button onclick="showActive()">Active</button>
<button onclick="showCompleted()">Completed</button>
</div>

<div class="bottom">
<p id="count"></p>
<button id="clearBtn" onclick="clearCompleted()">Clear Completed</button>
</div>

</div>

<script src="script.js"></script>

</body>
</html>
```
### style.css:
```
body{
font-family:Arial;
background:linear-gradient(to right,#0ff770,#0bd5dc);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
}

.container{
background:white;
padding:25px;
width:350px;
border-radius:15px;
box-shadow:0 10px 20px rgba(0,0,0,0.2);
text-align:center;
}

h2{
color:#333;
margin-bottom:15px;
}

.input-box{
display:flex;
gap:8px;
}

input{
flex:1;
padding:8px;
border-radius:5px;
border:1px solid #ccc;
}

button{
padding:8px 12px;
background:#e12097;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:#3b5fc0;
}

ul{
list-style:none;
margin-top:15px;
padding:0;
}

li{
padding:8px;
background:#f2f2f2;
margin-bottom:8px;
border-radius:5px;
cursor:pointer;
}

.done{
text-decoration:line-through;
color:gray;
}

.filters{
margin-top:10px;
display:flex;
justify-content:space-between;
}

.filters button{
background:#285dda;
}

.filters button:hover{
background:#2159f3;
}

.bottom{
display:flex;
justify-content:space-between;
align-items:center;
margin-top:10px;
}

#clearBtn{
background:#ff5c5c;
}

#clearBtn:hover{
background:#d63c3c;
}

#count{
font-size:14px;
color:#555;
}
```
```
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
```

## OUTPUT



## RESULT
The program for creating To-do list using JavaScript is executed successfully.
