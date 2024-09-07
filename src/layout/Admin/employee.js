import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlinePersonAdd } from "react-icons/md";
import { ModalAdd } from "../../components/modalAdd";
import { ModalEdit } from "../../components/modalEdit";
import { useEmployees } from "../../hooks/useEmployees";

const Employee = () => {
  const {
    employees,
    loading,
    error,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployees();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching employees</p>;

  return (
    <>
      <div className="bg-blue-100 p-6 h-screen">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Management Karyawan</h1>
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("modal_add").showModal()}
          >
            <MdOutlinePersonAdd className="text-3xl font-bold" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Divisi</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.division}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        setSelectedEmployee(employee);
                        document.getElementById("modal_edit").showModal();
                      }}
                    >
                      <FaEdit className="text-lg text-blue-600" />
                    </button>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => deleteEmployee(employee.id)}
                    >
                      <MdDelete className="text-lg text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <dialog id="modal_add" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tambah Karyawan</h3>
          <ModalAdd
            onSuccess={() => document.getElementById("modal_add").close()}
            addEmployee={addEmployee}
          />
        </div>
      </dialog>
      <dialog id="modal_edit" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Karyawan</h3>
          {selectedEmployee && (
            <ModalEdit
              employee={selectedEmployee}
              onSuccess={() => document.getElementById("modal_edit").close()}
              updateEmployee={updateEmployee}
            />
          )}
        </div>
      </dialog>
    </>
  );
};

export default Employee;
