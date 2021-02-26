// defining a component
import React, { useEffect, useState } from "react";
import EmployeeListItem from "./EmployeeListItem"
import data from "../data.json"

function EmployeeListContainer() {
  const [getEmployeeList, setEmployeeList] = useState(data)
  function orderEmployeeList() {
    getEmployeeList.sort(function (a, b) {
      if (a.data < b.data) { return -1; }
      if (a.data > b.data) { return 1; }
      return 0
      // items sorted here

      // use setEmployeelist to equal the above array
    })
  };

  return (
    <div>
      {/* Creates a table to store in the data that will be grabbed by map below */}
      <table>
        <thead>
          <tr>
            <th>
              <div>
                Image
              </div>
            </th>
            <th>
              {/* Headers of the table */}
              <div onClick={() => setEmployeeList("name")}>
                Name
              </div>
            </th>
            <th>
              <div onClick={() => setEmployeeList("email")}>
                Email
              </div>
            </th>
            <th>
              <div onClick={() => setEmployeeList("phone")}>
                Phone
              </div>
            </th>
            <th>
              <div onClick={() => setEmployeeList("dob")}>
                Date of birth
              </div>
            </th>
          </tr>

          {/* Map through data.json and displays information pulled to page  */}
          {getEmployeeList.map(data => {
            console.log(data)
            return (
              <tr>
                <td key={data.id}>
                  {<img src={data.image} style={{ height: "90px" }} />}
                </td>
                <td key={data.id}>
                  {data.name}
                </td>
                <td key={data.id}>
                  {data.email}
                </td>
                <td key={data.id}>
                  {data.phone}
                </td>
                <td key={data.id}>
                  {data.dob}
                </td>
              </tr>
            )
          })}
        </thead>
      </table>
      {/* store stateful values and store use values */}
      {/* mounts and use get employee list to map through and execute employeeListItem. need useEffect. */}

      {/* // employlee list will map through all employee */}
    </div>
  )
}

export default EmployeeListContainer