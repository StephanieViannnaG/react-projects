import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

import { employeesData } from "../../data/empList";
import { managerData } from "../../data/managerList";
import { Tabs } from "antd";

function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const LoginInfo = useSelector((state) => state.LoginInfo.data);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    console.log("handleEdit", employee);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  const onChange = (key) => {
    console.log(key);
  };
  const itemsForAdmin = [
    {
      key: "1",
      label: `Tab 1`,
      children: (
        <>
          <h3>Manager List</h3>
          <List
            employees={managerData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      ),
    },
    {
      key: "2",
      label: `Tab 2`,
      children: (
        <>
          <h3>Employee List</h3>
          <List
            employees={employeesData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      ),
    },
  ];
  const itemsForManager = [
    {
      key: "1",
      label: `Tab 1`,
      children: (
        <>
          <h3>Employee List</h3>
          <List
            employees={employeesData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      ),
    },
  ];
  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          {LoginInfo.uname === "admin" ? (
            <Tabs
              defaultActiveKey="1"
              items={itemsForAdmin}
              onChange={onChange}
            />
          ) : LoginInfo.uname === "manager" ? (
            <List
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ) : (
            <Edit
              employees={employees}
              selectedEmployee={employeesData[0]}
              setEmployees={setEmployees}
              setIsEditing={setIsEditing}
            />
          )}
        </>
      )}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;
