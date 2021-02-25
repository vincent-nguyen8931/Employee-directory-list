// defining a component
import React from "react";
import Header from "./Header";
import EmployeeListContainer from "./EmployeeListContainer"
function Main() {
    return (
        <div>
            <Header />
            
            <EmployeeListContainer />
     
        </div>
    )
}

export default Main