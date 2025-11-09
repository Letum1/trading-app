document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const showLogin = document.getElementById("show-login");
  const showRegister = document.getElementById("show-register");

  showLogin.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    showLogin.classList.add("text-blue-600");
    showRegister.classList.remove("text-blue-600");
  });

  showRegister.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    showLogin.classList.remove("text-blue-600");
    showRegister.classList.add("text-blue-600");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Logging in... (simulate backend call)");
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registering user... (simulate backend call)");
  });
});
