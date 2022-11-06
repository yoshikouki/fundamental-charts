"use client"

import { useState } from "react";
import { useApi } from "../hooks/api";

const Home = () => {
  const [message, setMessage] = useState("");
  const { get, getWithAuth } = useApi()

  const callApi = async () => {
    try {
      const res = await get("/health");
      setMessage(JSON.stringify(res));
    } catch (error) {
      setMessage(String(error));
    }
  };

  const callSecureApi = async () => {
    try {
      const res = await getWithAuth("/v1/assets");
      setMessage(JSON.stringify(res));
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
