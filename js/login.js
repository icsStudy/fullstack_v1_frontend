document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const errorEl = document.getElementById('errorMessage');
  errorEl.textContent = '';

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert('התחברת בהצלחה');
      return;
    }

    errorEl.textContent = data.message || 'שגיאה בהתחברות';
  } catch {
    errorEl.textContent = 'שגיאת רשת — ודא שהשרת פועל';
  }
});
