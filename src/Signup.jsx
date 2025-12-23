import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "adopter",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        role: formData.role,
      });

      alert("Signup successful");
      navigate("/signin");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Wagging Tales</h1>
        <p>Find Your Tale-Wagging Match</p>
      </div>

      <div className="right-panel">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="role-selection">
            <label>
              <input
                type="radio"
                name="role"
                value="adopter"
                checked={formData.role === "adopter"}
                onChange={handleChange}
              />
              Adopter
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="member"
                checked={formData.role === "member"}
                onChange={handleChange}
              />
              Member
            </label>
          </div>

          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="username" placeholder="Username" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />

          <button type="submit" className="Create">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
