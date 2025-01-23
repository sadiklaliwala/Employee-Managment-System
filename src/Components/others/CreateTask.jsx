import React, { useState } from "react";

const CreateTask = ({ AdminData }) => {

    const [Newtask, setNewTask] = useState({});
    const [taskTitle, setTaskTitle] = useState('');
    const [taskdesc, setTaskdesc] = useState('');
    const [taskdate, setTaskdate] = useState('');
    const [category, setCategory] = useState('');
    const [taskassign, setTaskAssign] = useState('');


    const SubmitHandler = (e) => {
        e.preventDefault();
        setNewTask({ taskTitle, taskdesc, taskdate, category, active: false, newTask: true, completed: false, failed: false })
        console.log(taskTitle, taskdesc, taskdate, category, taskassign);
        const Data = JSON.parse(localStorage.getItem("Employee"));
        console.log(Data);

        Data.forEach(function (elem) {
            elem.tasks.push(Newtask);
            elem.taskCount.newTask = elem.taskCount.newTask + 1;
        });

        localStorage.setItem('Employee', JSON.stringify(Data))

        // setTaskTitle('');
        // setTaskdesc('');
        // setTaskdate('');
        // setCategory('');
        // setTaskAssign('');
        console.log("Task created");

    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form method="POST" onSubmit={(e) => {
                SubmitHandler(e)
            }} className="flex w-full justify-between flex-wrap items-start" border="2px-solid-red">
                <div className="w-1/2">
                    <div className="">
                        <h3 className="text-sm text-gray-300 mb-0.5" htmlFor="username">Task Title</h3>
                        <input
                            value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" id="username" type="text" placeholder="Enter The Task " />
                    </div>
                    <div className="">
                        <h3 className="text-sm text-gray-300 mb-0.5" htmlFor="password">Date</h3>
                        <input
                            value={taskdate} onChange={(e) => { setTaskdate(e.target.value) }}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" id="password" type="date" />
                    </div>
                    <div className="">
                        <h3 className="text-sm text-gray-300 mb-0.5" htmlFor="username">Assign to</h3>
                        <input
                            value={taskassign} onChange={(e) => { setTaskAssign(e.target.value) }}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" id="username" type="text" placeholder="Employee Name  " />
                    </div>
                    <div className="">
                        <h3 className="text-sm text-gray-300 mb-0.5" htmlFor="username">Category</h3>
                        <input
                            value={category} onChange={(e) => { setCategory(e.target.value) }}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" id="username" type="text" placeholder="Dev Tested Etc " />
                    </div>
                </div>
                <div className="w-1/2 flex  flex-col items-start" >
                    <h3 className="text-sm text-gray-300 mb-0.5" htmlFor="username">Description</h3>
                    <textarea
                        value={taskdesc} onChange={(e) => { setTaskdesc(e.target.value) }}
                        className=" w-full h-44 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" rows="8 " id="username" placeholder="Enter The Task " />
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm  mt-4 w-full'> Create task </button>
                </div>
            </form>
        </div>
    );
}

export default CreateTask;