import React,{useState} from 'react';
import "./Departments.css"
import DepartmentButton from "./DepartmentButton";
function Departments(props)
{
    const [Department,setDepartment] = useState("");

    const updateSelectDepartment = (name) =>
    {
        setDepartment(name);
    }
    return (
            <div className={"middle-department"}>
                <label>Department</label>
                <DepartmentButton handleClick={updateSelectDepartment} classes={Department === "ITED"?"DepartmentButton-selected":"DepartmentButton"} name={"ITED"}/>
                <DepartmentButton handleClick={updateSelectDepartment} classes={Department === "BIOD"?"DepartmentButton-selected":"DepartmentButton"} name={"BIOD"}/>
                <DepartmentButton handleClick={updateSelectDepartment} classes={Department === "TEED"?"DepartmentButton-selected":"DepartmentButton"} name={"TEED"}/>
            </div>
    );
}

export default Departments;