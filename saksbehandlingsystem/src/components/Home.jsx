import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [welcomeMessage, setWelcomeMessage] = useState("Design: TBD (latskap)")
    const [connectionStatus, setConnectionStatus] = useState("Connecting...")
    const getText = async() => {
      await axios
      .get("/api/welcome")
      .then(response => {
        if (response.data == "Hello World!") {
          setConnectionStatus("Connected")
        }
      })
      .catch((error) => {
        console.error(error)
        setConnectionStatus("Failed to connect")
      })
  };
  
  
  
    useEffect(() => {
      getText()
    }, [])


    return (
        <>
        <h1>{welcomeMessage}</h1>
        <h2>{connectionStatus}</h2>
        <Link to="/login">Login</Link>
        </>
    )
}