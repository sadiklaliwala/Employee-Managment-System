import React from "react";

const AdminHeader =(props)=>{

    const Logout = ()=>{
        console.log("Clicked");
        localStorage.setItem('LoggedinUser','');
        // window.location.reload();
        props.ChangeUser('');
    }
    
    // ChangeUser

    return(
         <div className="flex justify-between item-end">
         <h2 className="text-xl font-semibold" > Hello <br /><span className="text-xl font-semibold" >{props.AdminData.firstname} 👏</span> </h2>
         <button onClick={Logout}  className="bg-red-600 text-sm font-medium text-white px-5 rounded-2xl " >Log Out</button>
      </div>
      
    );
}

export default AdminHeader ;
