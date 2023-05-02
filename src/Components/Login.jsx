
import '../App.css'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const [input, setInput] = useState //  check if name is exist to let login
    ({
      email: "",
      password: ""
    })


  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if (input.email === loggeduser.email && 
      input.password === 
      loggeduser.password ) 
    {
      nav('/')
      
    }
    else
    {
      console.log('No Found')
    }
  };

  return (
    <div>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Login</h2>

                    <form onSubmit={handleLogin}>

                      <div className="form-outline mb-4">

                        <input
                          name='email' // name is the name that is used when the value is passed

                          defaultValue={input.email} //

                          onChange={

                            (e) => setInput({ ...input, [e.target.name]: e.target.value })

                          }
                          type="email" id="form3Example3cg" className="form-control form-control-lg"
                        />

                        <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          name='password' // name is the name that is used when the value is passed

                          defaultValue={input.password} //

                          onChange={

                            (e) => setInput({ ...input, [e.target.name]: e.target.value })

                          }
                          type="password" id="form3Example4cg" className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="#!"
                        className="fw-bold text-body"><u>Register here</u></a></p>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      login
    </div>
  )
}

export default Login