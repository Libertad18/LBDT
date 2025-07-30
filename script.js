// script.js

const users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = null;
let referrer = new URLSearchParams(window.location.search).get("ref");

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function login() {
  const phone = document.getElementById('phone').value;
  const pass = document.getElementById('password').value;

  if (!users[phone]) {
    users[phone] = {
      password: pass,
      balance: 10,
      referrer: referrer || null,
    };
    alert("🎁 You've received 10 birr signup bonus!");
  }

  if (users[phone].password === pass) {
    currentUser = phone;
    updateUI();
    saveUsers();
  } else {
    alert("Incorrect password");
  }
}

function updateUI() {
  document.getElementById('userPhone').textContent = "User #" + currentUser.slice(-4); // hides full phone
  document.getElementById('balance').textContent = users[currentUser].balance.toFixed(2);
  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('wallet-section').classList.remove('hidden');
}

function deposit() {
  const amount = parseFloat(document.getElementById('depositAmount').value);
  const pass = document.getElementById('depositPass').value;

  if (isNaN(amount) || amount <= 0) return alert("Invalid amount");

  if (users[currentUser].password === pass) {
    users[currentUser].balance += amount;
    updateUI();
    saveUsers();
    alert("Deposit successful");
  } else {
    alert("Wrong password");
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById('withdrawAmount').value);
  const pass = document.getElementById('withdrawPass').value;

  if (isNaN(amount) || amount <= 0) return alert("Invalid amount");

  if (users[currentUser].password === pass) {
    if (amount > users[currentUser].balance) {
      alert("Insufficient balance");
    } else {
      users[currentUser].balance -= amount;
      updateUI();
      saveUsers();
      alert("Withdrawal successful");
    }
  } else {
    alert("Wrong password");
  }
}

function playGame() {
  const cost = 10;
  const resultText = document.getElementById('game-result');

  if (user
