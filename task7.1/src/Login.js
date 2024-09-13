import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

