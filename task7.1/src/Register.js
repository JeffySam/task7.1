import React from 'react';

function Register() {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <label>Confirm Password:</label>
        <input type="password" />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
