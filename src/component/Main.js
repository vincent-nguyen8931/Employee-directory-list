// defining a component
import React from "react";
import Header from "./Header";
import EmployeeListContainer from "./EmployeeListContainer"
function Main() {
    return (
        <div>
            <Header />
            
            <EmployeeListContainer />
     
        // employlee list will map through all employee
        </div>
    )
}

export default Main