document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const errorEl = document.getElementById('errorMessage');
  errorEl.textContent = '';

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = 'login.html';
      return;
    }

    errorEl.textContent = data.message || 'שגיאה בהרשמה';
  } catch {
    errorEl.textContent = 'שגיאת רשת — ודא שהשרת פועל';
  }
});
