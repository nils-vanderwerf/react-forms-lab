import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
  const handleChange = event => {
    console.log(event.target.name)
    if (event.target.name === 'username') {
      setUsername(event.target.value)
    }
    else if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const displayElement = document.getElementById('display-username')
    displayElement.innerHTML = username
  }

    return (
     <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={handleChange} value={username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={handleChange} value={password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      <p id="display-username"></p>
      </React.Fragment>
    );
}

export default LoginForm;
