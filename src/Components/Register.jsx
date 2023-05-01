import React, { useState } from 'react'
import Navbar from './Navbar'
import '../App.css'

const Register = () => {

    const [input, setInput] = useState // use to store value after register and check if name is exist to allow login
    ({
        name: "", 
        email: "",
        password: ""
    })

    const handleSubmit = (e) =>
    {
       e.preventDefault(); //prevent a browser reload/refresh and prevent text disappear from textBox

        localStorage.setItem("user", JSON.stringify(input))// object allows you to save key/value pairs in the browser.
        console.log(input)
    }
    return (

        <div>

            <section className="vh-100 bg-image">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card">
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                        
                                        <form onSubmit={handleSubmit} // it work well with button 
                                        > 

                                            <div className="form-outline mb-4"> 
                                                <input 
                                                name='name' // name is the name that is used when the value is passed
                                               
                                                value={input.name} //
                                                
                                                onChange={ 
                                                    
                                                    (e) => setInput({...input,[e.target.name] : e.target.value})
                                                
                                                }

                                                type="text" // defines a single-line text field
                                                id="form3Example1cg" // id is used to uniquely identify the element for CSS
                                                className="form-control form-control-lg" // ClassName property that can by called on an element to get/set its class
                                                />
                                                <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                name='email' // name is the name that is used when the value is passed
                                                defaultValue={input.email} // replace value to defaultValue, because unable to type in an input field by value property 
                                                
                                                onChange={ 
                                                    
                                                    (e) => setInput({...input,[e.target.name] : e.target.value})
                                                
                                                }
                                                 type="text" 
                                                 id="form3Example1cg" 
                                                 className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input 
                                                 name='password' // name is the name that is used when the value is passed
                                                 defaultValue={input.password} // replace value to defaultValue, because unable to type in an input field by value property 
                                                 
                                                 onChange={ 
                                                     
                                                     (e) => setInput({...input,[e.target.name] : e.target.value})
                                                 
                                                 }

                                                type="password"
                                                 id="form3Example4cg" 
                                                 className="form-control form-control-lg"
                                                  />
                                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button 
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                >Register
                                                </button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                                className="fw-bold text-body"><u>Login here</u></a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </div>
    )
}

export default Register