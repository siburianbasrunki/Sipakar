import React, { useState } from "react";

export const ModalAdd = ({ onSuccess, addEmployee }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [division, setDivision] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addEmployee({ name, email, password, division });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-blue-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-blue-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-blue-700"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-blue-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-blue-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-blue-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-blue-700"
          htmlFor="division"
        >
          Division
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-blue-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-500"
          id="division"
          type="text"
          placeholder="Division"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="btn btn-primary" type="submit">
          Add Employee
        </button>
      </div>
    </form>
  );
};
