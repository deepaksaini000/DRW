
let users = JSON.parse(localStorage.getItem("users")) || [];

function render(){
let list=document.getElementById("tbody");
if(!list)return;
list.innerHTML="";
users.forEach((u,i)=>{
list.innerHTML+=`<tr>
<td>${u.name}</td>
<td>${u.email}</td>
<td>${u.license}</td>
<td><button onclick="del(${i})">Delete</button></td>
</tr>`;
});
}

function add(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let license=document.getElementById("license").value;
users.push({name,email,license});
localStorage.setItem("users",JSON.stringify(users));
closeModal();
render();
}

function del(i){
users.splice(i,1);
localStorage.setItem("users",JSON.stringify(users));
render();
}

function openModal(){document.getElementById("modal").style.display="block"}
function closeModal(){document.getElementById("modal").style.display="none"}

render();
