    var isSignupMode = false;

    function showPage(name) {
      document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
      document.getElementById(name + '-page').classList.add('active');
    }

    function toggleSignup(forceSignup) {
      isSignupMode = forceSignup !== undefined ? forceSignup : !isSignupMode;
      document.getElementById('signup-name').style.display = isSignupMode ? 'block' : 'none';
      document.getElementById('login-title').textContent = isSignupMode ? 'Create an account' : 'Welcome back';
      document.getElementById('login-subtitle').textContent = isSignupMode ? 'Sign up to get started' : 'Log in to your account';
      document.getElementById('login-btn-text').textContent = isSignupMode ? 'Create Account' : 'Log In';
      document.getElementById('toggle-msg').textContent = isSignupMode ? 'Already have an account?' : "Don't have an account?";
      document.getElementById('toggle-link').textContent = isSignupMode ? 'Log in' : 'Sign up';
    }

    function handleLogin() {
      var email = document.getElementById('input-email').value;
      var password = document.getElementById('input-password').value;
      var name = document.getElementById('input-name').value;

      if (!email || !password || (isSignupMode && !name)) {
        alert('Please fill in all fields');
        return;
      }

      var userName = isSignupMode ? name : email.split('@')[0];
      document.getElementById('user-name').textContent = userName;
      showPage('dashboard');
    }

    function handleLogout() {
      showPage('home');
    }