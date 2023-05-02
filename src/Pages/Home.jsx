import React from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const nav = useNavigate();

  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () =>
  {
    localStorage.removeItem("loggedin") 
    nav('/login')
      
  }
  return (
    <div> 
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Home Page</h2>

                    <form>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">Welcome {userName.name}</label>
                      </div>
                      <button type="button"
                      onClick={handleLogout}
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >Log out
                      </button>

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
