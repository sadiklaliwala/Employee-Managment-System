import React from 'react';
import AdminHeader from '../others/admin/AdminHeader';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';


const AdminDashbord = (props) => {
    // console.log(AdminData)
    return (
        <div className="h-screen w-full p-10">
            <AdminHeader AdminData={props.AdminData} ChangeUser={props.ChangeUser}/>
            <CreateTask AdminData={props.AdminData} />
            <AllTask  AdminData={props.AdminData}/>
        </div>
    );
}

export default AdminDashbord;