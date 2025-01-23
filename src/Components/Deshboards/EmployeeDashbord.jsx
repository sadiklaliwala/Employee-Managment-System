import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList"

// bakki 6
const EmployeeDashbord = (props) => {

    
    console.log(props.EmpData)
    return (
        <div className=" h-screen p-10 bg-[#1c1c1c] ">
            <Header EmpData={props.EmpData} ChangeUser={props.ChangeUser} />
            <TaskListNumber EmpData={props.EmpData} />
            <TaskList EmpData={props.EmpData} />
        </div>
    )
}

export default EmployeeDashbord;