import React, {useState, useContext} from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        // Prevent the page from refreshing
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        />
        {" "}
        <input type="password"
        value={password}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Password'
        />
        <button onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login