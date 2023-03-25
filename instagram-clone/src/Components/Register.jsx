import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import toast from "react-hot-toast";
import Footer from "./Footer.jsx"

function Register() {
  const [instaUserData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useNavigate();

  function submit(e) {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("instaUserData")) || [];

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === instaUserData.email) {
        flag = true;
      }
    }
    if (flag) {
      setUserData({ ...instaUserData, ["email"]: "" });
      return toast.error("email already exsited");
    } else if (instaUserData.password.length < 8) {
      setUserData({ ...instaUserData, ["password"]: "" });
      toast.error("password must be 8 characters");
    } else {
      dataFromLs.push(instaUserData);
      localStorage.setItem("instaUserData", JSON.stringify(dataFromLs));
      setUserData({  email: "",  name: "", userName: "",   password: "" });
      router("/login");
      toast.success("Registration done");
    }
  }

  function featchData(e) {
    var value = e.target.value;
    var name = e.target.name;

    setUserData({ ...instaUserData, [name]: value });
  }
  return (
    <>
    <div>
      <div className="home-bot">
        {/* <HomePage /> */}
      </div>
      <div id="sign-up">
        <div className="signUp-page">
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
              <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/>
              <p>
                {" "}
                <strong> or </strong>Sign up to see photos and videos from your friends.
              </p>
              <button id="loginfb">Login with Facebook</button>
            </div>
            <div></div>
          </div>

          <div id="register-form">
            <form>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => {
                  featchData(e);
                }}
                name="email"
                required
                value={instaUserData.email}
              /><br/>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => {
                  featchData(e);
                }}
                name="name"
                required
                value={instaUserData.name}
              /><br/>
               <input
                type="text"
                placeholder="userName"
                onChange={(e) => {
                  featchData(e);
                }}
                name="userName"
                required
                value={instaUserData.userName}
              /><br/>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  featchData(e);
                }}
                name="password"
                required
                value={instaUserData.password}
              />
            </form>
          </div>

          <div id="terms">
            <small>People who use our service may have uploaded your contact information to Instagram.<strong>Learn More</strong> </small><br/><br/>
            <small>
            By signing up, you agree to our{" "}
              <strong>Terms & Conditions & Privacy Policy</strong>
            </small><br/><br/>
            <button id="signuphere" onClick={(e) => submit(e)}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
export default Register;