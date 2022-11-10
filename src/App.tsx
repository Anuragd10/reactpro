
import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App () {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h5 className="Auth-form-title">User Registration</h5>
          <div className="form-group mt-3">
            <label>Full Name </label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          <div className="form-group mt-3">
            <label>Employee No.</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          <div className="form-group mt-3">
            <label>Mobile No. </label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          <div className="form-group mt-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          <div className="form-group mt-3">
            <label>Zone</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder=""
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
}