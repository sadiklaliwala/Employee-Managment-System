import React from "react";

const Header =(props)=>{

    const Logout = ()=>{
        localStorage.setItem('LoggedinUser','');
        props.ChangeUser('');
    }
    

    return(
         <div className="flex justify-between item-end">
            <h2 className="text-xl font-medium" > Hello <br /><span className="text-xl font-semibold" >{props.EmpData.firstname} 👏</span> </h2>
            <button onClick={Logout}  className="bg-red-600 text-sm font-medium text-white px-5 rounded-2xl " >Log Out</button>
         </div>
    );
}

export default Header ;
