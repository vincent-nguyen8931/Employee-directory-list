// defining a component
import React from "react";
import EmployeeListItem from "./EmployeeListItem"

function EmployeeListContainer() {
  return (
    <div>
      <EmployeeListContainer />
      {/* employlee list will map through all employee}*/}
    </div>
  )
}

export default EmployeeListContainer