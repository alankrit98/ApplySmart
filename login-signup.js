document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");
  const signupForm = document.querySelector("#signupForm");
  const toggleToSignup = document.querySelector("#toggleToSignup");
  const toggleToLogin = document.querySelector("#toggleToLogin");

  const API = "https://applysmart-38ep.onrender.com/api";

  toggleToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  toggleToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#signupName").value.trim();
    const email = document.querySelector("#signupEmail").value.trim();
    const password = document.querySelector("#signupPassword").value;

    try {
      const res = await fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        signupForm.reset();
        toggleToLogin.click();
      }
    } catch (err) {
      alert("Signup failed. Please try again.");
    }
  });

  loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#loginEmail").value.trim();
  const password = document.querySelector("#loginPassword").value;

  try {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      loginForm.reset();
      window.top.location.href = "applyform.html"; // Full-page redirection
    }
  } catch (err) {
    alert("Login failed. Please try again.");
  }
});

});
