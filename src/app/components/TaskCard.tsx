'use client'
import React from "react";

interface TaskCardProps {
    id: number;
    title: string;
    color: string;
    completed: boolean;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
    id,
    title,
    color,
    completed,
    onToggleComplete,
    onDelete,
}) => {
    return (

        // <div
        //   className={`flex items-center justify-between p-4 rounded-lg shadow-md border-l-4 border-${color}-500`}
        // >
        //   <div className="flex items-center gap-3">
        //     <input
        //       type="checkbox"
        //       checked={completed}
        //       onChange={() => onToggleComplete(id)}
        //       className="w-5 h-5"
        //     />
        //     <h3 className={`${completed ? "line-through text-gray-400" : ""}`}>
        //       {title}
        //     </h3>
        //   </div>
        //   <button
        //     onClick={() => onDelete(id)}
        //     className="text-red-500 hover:text-red-700"
        //   >
        //     Delete
        //   </button>
        // </div>
        <div>
            {/* {tasks.length > 0 ? ( */}

                <div>
                    <div className='bg-black rounded-[5px] p-[15px] flex gap-3 mb-4'>
                        <div>
                            <input
                                type="checkbox"
                                checked={completed}
                                onChange={() => onToggleComplete(id)}
                                className="w-5 h-5"
                            />
                        </div>
                        <div className="text-white">
                            {title}
                        </div>
                        <div className='ml-auto text-[#eeeeee]'>
                            <button
                                onClick={() => onDelete(id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            {/* ) : ( */}
{/* 
                <div className="text-center text-white mt-4">
                    <div>
                        image
                    </div>
                    <p className="mt-3">
                        You don't have registered yet
                    </p>
                    <p className="text-[bfbfbf] mt-5">
                        Create task and organize your to-do list.
                    </p>

                </div> */}
            {/* ) */}
            {/* } */}
        </div>

    );
};

export default TaskCard;
