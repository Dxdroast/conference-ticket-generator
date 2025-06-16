// ticket.js
window.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("ticketData"));
  if (!data) {
    alert("No ticket data found. Redirecting to form.");
    window.location.href = "index.html";
    return;
  }

  document.getElementById("ticketName").textContent = data.fullName;
  document.getElementById("ticketEmail").textContent = data.email;
  document.getElementById("ticketGithub").textContent = `@${data.githubId}`;

  const avatar = document.getElementById("avatarPreview");
  if (data.avatar) {
    avatar.src = data.avatar;
  }
});
