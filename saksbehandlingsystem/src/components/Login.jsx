import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState("Du er ikke logget inn");

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("/api/login", {
                email: email,
                password: password,
            }).then((response) => {
                console.log(response.data);
                if (response.data == "correct password") {
                    setLoginStatus("Du er logget inn");
                    // navigate("/home");
                } else {
                    setLoginStatus("Feil passord eller brukernavn");
                }
            })
        
    };

    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <h2>{loginStatus}</h2>
                <form className="login-form">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}   
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Log in
                    </button>
                </form>
            </div>
        </>
    );
};