// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // const [error, setError] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const inputRef = useRef('')

  const onSubmitHandler = e => {
    e.preventDefault()

    onSubmitUsername(inputRef.current.value)
  }

  // const handleChangeInput = e => {
  //   const {value} = e.target

  //   const isLowerCase = value === value.toLowerCase()

  //   setError(isLowerCase ? null : 'Username must be lowercase')
  // }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          type="text"
          id="userNameInput"
          ref={inputRef}
          value={inputValue}
          onChange={e => setInputValue(e.target.value.toLowerCase())}
        />
      </div>
      <button type="submit">Submit</button>
      {/* <h2 style={{color: 'red'}}>{error}</h2> */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
