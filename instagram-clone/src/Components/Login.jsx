import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import toast  from "react-hot-toast";
import "./component.css";
import Footer from "./Footer.jsx"

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useNavigate();

  function checkLog(e) {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("instaUserData"));

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
      if (
        dataFromLs[i].email === formData.email &&

        dataFromLs[i].password === formData.password
      ) {
        flag = true;
      }
    }
    if (flag) {
      localStorage.setItem("instaCurrentUser", JSON.stringify(formData.email));
      setFormData({ email: "", password: "" });
      router("/");
      toast.success("Log in sucessful");
    } else {
      setFormData({ email: "", password: "" });
      toast.error("Please check email or password");
    }
  }

  function featchData(e) {
    var value = e.target.value;
    var name = e.target.name;
    // console.log(name,value) ;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
    <div id="Login">
      <div className="home-bot">
        <HomePage />
      </div>
      <div id="login-top">
        <div className="login-page">
          <div
            onClick={() => {
              router("/");
            }}
          >
            {" "}
            X{" "}
          </div>
          <div>
            <div>
              <h2>Log in</h2>
              <p>
                {" "}
                <strong> or </strong> create an account
              </p>
            </div>
            <div></div>
          </div>

          <div id="login-form">
            <form>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  featchData(e);
                }}
                name="email"
                required
                value={formData.email}
              /><br/>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  featchData(e);
                }}
                name="password"
                required
                value={formData.password}
              />
            </form>
          </div>

          <div>
            <button
              onClick={(e) => {
                checkLog(e);
              }}
            >
              Continue
            </button>
            <p className="tc">
              By creating an account, I accept the{" "}
              <strong>Terms & Conditions & Privacy Policy</strong>
            </p>
          </div>
        </div>
      </div>
    </div>




    <Footer/>
    </>
  );
}

export default Login;