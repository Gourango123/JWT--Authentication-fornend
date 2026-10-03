import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        formData,
      );
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;