// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); //  In order to prevent the default behavior of making a post request to the same URL by doing a full page refresh
    // const username = event.target.elements.usurnameInput.value;
    onSubmitUsername(username);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usurnameInput">Username:</label>
        <input id="usurnameInput" value={username} type="text" onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
