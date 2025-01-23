import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashbord from "./Components/Deshboards/EmployeeDashbord";
import AdminDashbord from "./Components/Deshboards/AdminDashbord";
import { setLocalStroage } from "./Utils/localStorage";
import { getLocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./Context/AuthProvider";
const app = () => {

  const [User, setUser] = useState();
  const [LoggedinData, setLoggedinData] = useState();
  const AuthData = useContext(AuthContext);

  useEffect(() => {
      const LoggedinUser = localStorage.getItem("LoggedinUser");
      if (LoggedinUser) {
        const UserData = JSON.parse(LoggedinUser);
        setUser(UserData.Role);
        setLoggedinData(UserData.Data);
      }
  }, [])



  const HandleLogin = (email, password) => {
    if (AuthData && AuthData.Admin.find((e) => e.email == email && e.password == password)) {
      const Admin = AuthData.Admin.find((e) => e.email == email && e.password == password);
      console.log('This is Admin');
      setUser("Admin");
      setLoggedinData(Admin);
      localStorage.setItem('LoggedinUser', JSON.stringify({ Role: 'Admin', Data: Admin }));
    }
    else if (AuthData) {
      const employee = AuthData.Employees.find((e) => e.email == email && e.password == password)
      if (employee) {
        // console.log('This is Employee');
        setUser("Employee");
        setLoggedinData(employee);
        localStorage.setItem('LoggedinUser', JSON.stringify({ Role: 'Employee', Data: employee }));
      }
    }
    else {
      alert('invalid Crendtials');
    }
  }
  // console.log(LoggedinData);


  return (
    <div>
      {/* chek if user is not Empty    */}
      {User
        // If user is admin Then go to admin or
        ? User == 'Admin' ? <AdminDashbord AdminData={LoggedinData} ChangeUser={setUser}/>
          // User Is Employee Then User Go to Employee Deshboard or
          : User == 'Employee' ? <EmployeeDashbord EmpData={LoggedinData} ChangeUser={setUser}/>
            : null
        // if user is not login then go to login page 
        : <Login HandleLogin={HandleLogin} />}
    </div>
  )
}
export default app;