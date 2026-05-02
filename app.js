let users = JSON.parse(localStorage.getItem("users")) || [];

function renderUsers() {
  let list = document.getElementById("userList");
  if (!list) return;

  list.innerHTML = "";
  users.forEach((u, i) => {
    list.innerHTML += `
      <li>
        ${u}
        <button onclick="deleteUser(${i})">❌</button>
      </li>
    `;
  });

  let count = document.getElementById("userCount");
  if (count) count.innerText = users.length;
}

function addUser() {
  let name = document.getElementById("name").value;
  if (!name) return;
  users.push(name);
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("name").value = "";
  renderUsers();
}

function deleteUser(i) {
  users.splice(i, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}

renderUsers();
