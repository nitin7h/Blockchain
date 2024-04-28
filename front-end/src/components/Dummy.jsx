import React from "react";
import axios from "axios";
import { useState } from "react";
export default function SendData() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    balance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:7000/addUser", userData)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error submitting user data:", error);
      alert("Error submitting user data. Please try again later.");
    }
  };
  return (
    <div>
      <h1>Add User Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <label>Balance:</label>
        <input
          type="number"
          name="balance"
          value={userData.balance}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
