// defining a component
import React, { useEffect, useState } from "react";
import EmployeeListItem from "./EmployeeListItem"
import data from "../data.json"

function EmployeeListContainer() {
    const [getEmployeeList, setEmployeeList] = useState(data)
    function orderEmployeeList() {
        getEmployeeList.sort
        // items sorted here

        // use setEmployeelist to equal the above array
        
    }
    
    return (
        <div>
           {/* import the data.json.  */}
           {/* map through each object in data */}
           {/* each one should call employee list item and send the props */}
           {/* store stateful values and store use values */}
           {/* mounts and use get employee list to map through and execute employeeListItem. need useEffect. */}
     
        // employlee list will map through all employee
        </div>
    )
}

export default EmployeeListContainer