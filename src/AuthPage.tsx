import React from 'react';

const AuthPage: React.FC = () => {
  // Dummy authentication logic
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login successful! (Dummy)');
    // In a real app, you would set authentication state here
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to Counter App</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              required
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="auth-footer">
          <a href="#forgot-password">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;