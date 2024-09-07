import React, { useState, useEffect } from "react";

export const ModalEdit = ({ employee, onSuccess, updateEmployee }) => {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [division, setDivision] = useState(employee.division);

  useEffect(() => {
    setName(employee.name);
    setEmail(employee.email);
    setDivision(employee.division);
  }, [employee]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateEmployee(employee.id, { name, email, division });
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
          Save Changes
        </button>
      </div>
    </form>
  );
};
