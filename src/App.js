import { useState } from 'react'

const App = () => {

  const [userState, setUserState] = useState({
    email: '',
    password: '',
    users: []
    // user: {
    //   email: '',
    //   password: ''
    // }
  })

  const handleInputChange = ({ target }) => {
    setUserState({ ...userState, [target.name]: target.value })
  }

  const handleSignIn = event => {
    event.preventDefault()
    const users = JSON.parse(JSON.stringify(userState.users))
    users.push({
      email: userState.email,
      password: userState.password
    })
    setUserState({ ...userState, users, email: '', password: '' })
    // setUserState({
    //   ...userState,
    //   user: {
    //     email: userState.email,
    //     password: userState.password
    //   },
    //   email: '',
    //   password: ''
    // })
  }

  return (
    <>
      <form>
        <p>
          <label htmlFor="email">email</label>
          <input 
            type="text" 
            name="email"
            value={userState.email}
            onChange={handleInputChange} />
        </p>
        <p>
          <label htmlFor="password">password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={userState.password}
            onChange={handleInputChange} />
        </p>
        <p>
          <button
            onClick={handleSignIn} >
            Sign In
          </button>
        </p>
      </form>
      <div>
        {/* <h5>Email: {userState.user.email}</h5>
        <h5>Password: {userState.user.password}</h5> */}
        {
          userState.users.map(user => (
            <div>
              <h5>Email: {user.email}</h5>
              <h5>Password: {user.password}</h5>
              <hr />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
