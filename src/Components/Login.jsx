import React from 'react'
import Navbar from './Navbar'

const Login = () => {

  const [input, setInput] = useState //  check if name is exist to let login
  ({
      email: "",
      password: ""
  })
  return (
    <div>
        <Navbar/>

        login
    </div>
  )
}

export default Login