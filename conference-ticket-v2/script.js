// script.js
document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const githubId = document.getElementById("githubId").value.trim();
  const avatarFile = document.getElementById("avatar").files[0];

  const reader = new FileReader();

  reader.onloadend = function () {
    const ticketData = {
      fullName,
      email,
      githubId,
      avatar: avatarFile ? reader.result : null,
    };

    localStorage.setItem("ticketData", JSON.stringify(ticketData));
    window.location.href = "ticket.html";
  };

  if (avatarFile) {
    reader.readAsDataURL(avatarFile);
  } else {
    reader.onloadend();
  }
});
