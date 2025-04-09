import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("API Response:", data); // 🔍 DEBUGGING
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      // 🔥 FIX: Ensure role is stored correctly
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role || "user"); // Default to "user" if undefined
  
      console.log("Stored Role:", localStorage.getItem("role")); // 🔍 DEBUGGING
  
      // Redirect based on role
      if (data.role === "doctor") {
        navigate("/doctor-dashboard");
      } else if (data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  
  

  return (
    <div className="h-screen bg-[#eeeeff] bg-cover bg-center" style={{backgroundImage: "url('/images/logging.jpg')"}}>
      <h2 className="text-center font-bold text-black text-3xl bg-white p-3">Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin} className="border-2 border-black text-center space-y-3 md:mt-[10%] p-4 bg-white/65">
        <label>Email:</label>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-center border-2 border-black rounded"
          required
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          className="text-center border-2 border-black rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="px-5 py-3 bg-blue-600 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
