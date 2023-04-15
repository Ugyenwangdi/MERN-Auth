import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/v1/users/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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

  return (
    <div className="login_container">
      <div
        className="login_form_container"
        style={{ height: "680px", width: "1050px" }}
      >
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
              Welcome to Druk Ebird! Please create your account.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10px",
              }}
            >
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className={styles.input}
                id="firstname"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "10px",
              }}
            >
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className={styles.input}
                id="lastname"
              />
            </div>

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
                className={styles.input}
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
                className={styles.input}
                id="password"
              />
            </div>

            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
              Sign Up
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
              <Link to="/login">Sign In</Link>
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

export default Signup;

// <div className={styles.signup_container}>
//   <div className={styles.signup_form_container}>
//     <div className={styles.left}>
//       <h1>Welcome Back</h1>
//       <Link to="/login">
//         <button type="button" className={styles.white_btn}>
//           Sign in
//         </button>
//       </Link>
//     </div>
//     <div className={styles.right}>
//       <form className={styles.form_container} onSubmit={handleSubmit}>
//         <h1>Create Account</h1>
//         <input
//           type="text"
//           placeholder="First Name"
//           name="firstName"
//           onChange={handleChange}
//           value={data.firstName}
//           required
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           name="lastName"
//           onChange={handleChange}
//           value={data.lastName}
//           required
//           className={styles.input}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           onChange={handleChange}
//           value={data.email}
//           required
//           className={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           onChange={handleChange}
//           value={data.password}
//           required
//           className={styles.input}
//         />
//         {error && <div className={styles.error_msg}>{error}</div>}
//         <button type="submit" className={styles.green_btn}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   </div>
// </div>;
