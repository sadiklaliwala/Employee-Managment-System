import React from 'react';

const CompleteTask=({Data})=>{
    console.log(Data.taskTitle);
    
    return(
        <div id="tasklist" className=" flex-shrink-0 h-full overflow-auto w-[300px] p-5 bg-red-400 rounded-xl  ">
        <div className="flex justify-between items-center">
            <button><h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3></button>
            <h4 className="text-sm">{Data.taskDate}</h4>
        </div>
        <h2 className="mt-5 font-semibold text-2xl">{Data.taskTitle} </h2>
        <p className=" text-sm mt-2  ">{Data.taskDescription}</p>
        <div className="flex justify-between mt-4">
            <button className="bg-green-500 py-1 px-2 text-sm rounded-md">Completed </button>
        </div>
    </div>
    )
}

export default CompleteTask;