let currentUser = null;
let users = {};
let) {let stocks = { "Stock A": 100, "Stock B": 150 };
    const option = document.createElement("option");
    option.value = stock;
    option.textContent = `${stock} - ${stocks[stock]} credits`;
    stockSelect.appendChild(option);
  }

  users[currentUser].inventory.forEach(item => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    sellSelect.appendChild(option);

    const li = document.createElement("li");
    li.textContent = item;
    inventoryList.appendChild(li);
  });
}

function login() {
  const username = document.getElementById("username").value;
  const role = document.getElementById("role").value;

  if (!users[username]) {
    users[username] = { role, balance: 1000, inventory: [], banned: false };
  }

  if (users[username].banned) {
    alert("You are banned.");
    return;
  }

  currentUser = username;
  document.getElementById("login-section").style.display = "none";
  document.getElementById("user-section").style.display = "block";
  document.getElementById("admin-section").style.display = role === "admin" ? "block" : "none";

  updateUI();
}

function buyStock() {
  const selected = document.getElementById("stock-select").value;
  const price = stocks[selected];
  if (users[currentUser].balance >= price) {
    users[currentUser].balance -= price;
    users[currentUser].inventory.push(selected);
    updateUI();
  } else {
    alert("Not enough balance!");
  }
}

function sellStock() {
  const selected = document.getElementById("sell-select").value;
  const index = users[currentUser].inventory.indexOf(selected);
  if (index > -1) {
    users[currentUser].inventory.splice(index, 1);
    users[currentUser].balance += stocks[selected];
    updateUI();
  }
}

function createStock() {
  const name = document.getElementById("new-stock-name").value;
  const price = parseInt(document.getElementById("new-stock-price").value);
  if (name && price > 0) {
    stocks[name] = price;
    updateUI();
  }
}

function banUser() {
  const user = document.getElementById("ban-user").value;
  if (users[user]) {
    users[user].banned = true;
    alert(`User "${user}" has been banned.`);
  } else {
    alert("User not found.");
  }
}

function updateUI() {
  document.getElementById("balance").textContent = users[currentUser].balance;
  const stockSelect = document.getElementById("stock-select");
  const sellSelect = document.getElementById("sell-select");
  const inventoryList = document.getElementById("inventory");

  stockSelect.innerHTML = "";
  sellSelect.innerHTML = "";
  inventoryList.innerHTML = "";

