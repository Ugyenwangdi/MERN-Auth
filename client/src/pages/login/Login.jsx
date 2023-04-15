import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/v1/users/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left" style={{ flex: 1 }}>
          <form className="form_container" onSubmit={handleSubmit}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/logo192.png"
                alt="Logo"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
            <p style={{ fontSize: "18px" }}>
              Welcome back! Please enter your details.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10px",
              }}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="input"
                id="email"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10px",
              }}
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="input"
                id="password"
              />
            </div>

            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
              Sign In
            </button>

            <p className="text">or</p>
            <button className="google_btn" onClick={googleAuth}>
              <img src="./images/google.png" alt="google icon" />
              <span>Sign in with Google</span>
            </button>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "106px",
                paddingRight: "106px",
              }}
            >
              <Link to="/forgot-password">Forgot Password?</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </div>

        <div
          className="right"
          style={{
            backgroundImage: "url('/images/bird.png')",
            backgroundSize: "cover",
            flex: 1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
