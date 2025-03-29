import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../public/register.css"; // Import the CSS file

function Register() {
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();

    function getDetails(event) {
        const { name, value } = event.target;
        if (name === "username") setUser(value);
        else if (name === "password") setPass(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = { username, password };

        try {
            const response = await fetch("https://dronex-front.onrender.com/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Response Message:", data.message);

            if (data.success) {
                navigate("/");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div>
                    <div>
          <div className="logoelementform">
            <p>DRONEX</p>
          </div>
          <div className="sentenceform">Fly beyond Limits! 🚀</div>

        </div>



       
        <div className="containers">
            <h2>Register Here!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={getDetails}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={getDetails}
                    required
                />
                <button type="submit">Register</button>
                <p>
                    Already have an account? <NavLink to="/">Login</NavLink>
                </p>
            </form>
        </div>
        </div>
    );
}

export default Register;
