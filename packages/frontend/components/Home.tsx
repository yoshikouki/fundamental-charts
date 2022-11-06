"use client"

import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { config } from "../config";

const Home = () => {
  const [message, setMessage] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${config.api.baseUrl}/v1`);
      const responseData = await response.text();
      setMessage(responseData);
    } catch (error) {
      setMessage(String(error));
    }
  };

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `${config.api.baseUrl}/v1/assets`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.text();
      setMessage(responseData);
    } catch (error) {
      setMessage(String(error));
    }
  };

  return (
    <>
      Home
      <div>
        <button onClick={callApi}>call API</button>
      </div>
      <div>
        <button onClick={callSecureApi}>call Secure API</button>
      </div>
      {message && (
        <p>Message: {message}</p>
      )}
    </>
  )
}

export default Home
