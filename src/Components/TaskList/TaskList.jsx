import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ EmpData }) => {
    return (
        <div id="tasklist" className="h-[55%] w-full py-5 overflow-x-auto  mt-10 flex justify-start items-center gap-10 flex-nowrap p-5">

            {EmpData.tasks.map((elem, idx) => {

                if (elem.active) {
                    return <AcceptTask key={idx} Data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} Data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} Data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} Data={elem} />
                }
                // console.log(elem);

            })}


        </div>
    );
}

export default TaskList;