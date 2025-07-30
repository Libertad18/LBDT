function submitWallet() {
  const wallet = document.getElementById("wallet").value;
  const isValid = /^0x[a-fA-F0-9]{40}$/.test(wallet);
  if (!isValid) {
    document.getElementById("error").innerText = "Invalid wallet address!";
    return;
  }
  localStorage.setItem("wallet", wallet);
  window.location.href = "task.html";
}
