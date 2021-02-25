// defining a component
import React from "react";
import EmployeeListItem from "./EmployeeListItem"
import Header from "./Header"

function EmployeeListContainer() {
    return (
        <div>
            <Header />
            
            <EmployeeListContainer />
           
        {/* employlee list will map through all employee}*/}
        </div>
    )
}

export default EmployeeListContainer