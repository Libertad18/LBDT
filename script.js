function submitWallet() {
  const wallet = document.getElementById("walletInput").value.trim();
  if (!wallet.startsWith("0x") || wallet.length < 42) {
    alert("Please enter a valid wallet address.");
    return;
  }

  // Save wallet (can add Firebase or backend here later)
  localStorage.setItem("wallet", wallet);

  // Redirect to task page
  window.location.href = "task.html";
}
