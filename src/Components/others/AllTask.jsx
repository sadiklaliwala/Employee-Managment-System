import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = () => {

    const AuthData = useContext(AuthContext);
    // console.log(AuthData.Employees);

    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-45 '>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded align-text-center'>
                <h2 className='w-1/6 '>Employee</h2>
                <h2 className='w-1/6 '>New Task</h2>
                <h2 className='w-1/6 '>Active Task </h2>
                <h2 className='w-1/6 '>Completed Task</h2>
                <h2 className='w-1/6 '>Failed Task</h2>
            </div>

            <div className=''>
                {AuthData.Employees.map(function (elem, idx) {
                    return <div className=' mb-2 py-2 px-4 flex justify-between rounded  ' key={idx}>
                        <h2 className='w-1/6 text-white'>{elem.firstname}</h2>
                        <h2 className='w-1/6 text-blue-400'>{elem.taskCount.active} </h2>
                        <h2 className='w-1/6 text-yellow-400'>{elem.taskCount.newTask}</h2>
                        <h2 className='w-1/6 text-green-400'>{elem.taskCount.completed}</h2>
                        <h2 className='w-1/6 text-red-400'>{elem.taskCount.failed}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTask