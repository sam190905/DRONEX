import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../context/context";
import "../../public/form.css"; // Import the CSS file

const clientId = "48738458953-ejeund67hkp4p95l3btg3c2n9k845h5k.apps.googleusercontent.com";

function Form() {
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();
    const { setUser: setGlobalUser } = useUser();

    function getDetails(event) {
        const { name, value } = event.target;
        if (name === "username") setUser(value);
        else if (name === "password") setPass(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = { username, password };

        try {
            const response = await fetch("https://dronex-back.onrender.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Response Message:", data.message);

            if (data.success) {
                setGlobalUser({ name: username });
                console.log("User logged in!");
                localStorage.setItem("username", username);
                navigate("/Home");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function handleGoogleLogin(response) {
        try {
            const decoded = jwtDecode(response.credential);
            console.log("Google User Info:", decoded);

            // Send token to backend for verification & authentication
            const res = await fetch("https://dronex-back.onrender.com/google-login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: response.credential }),
            });

            const data = await res.json();
            if (data.success) {
                navigate("/Home");
            } else {
                alert("Google Login Failed!");
            }
        } catch (error) {
            console.error("Google Login Error:", error);
        }
    }

    return (
        
        <div className="containers">
            <h2>Login</h2>
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
                <button type="submit">Login</button>
                <p>
                    New User? <NavLink to="/Register">Register</NavLink>
                </p>
            </form>
            <div className="google-login">
                <GoogleOAuthProvider clientId={clientId}>
                    <GoogleLogin
                        onSuccess={handleGoogleLogin}
                        onError={() => console.log("Google Login Failed")}
                    />
                </GoogleOAuthProvider>
            </div>
            
        </div>
    );
}

export default Form;
