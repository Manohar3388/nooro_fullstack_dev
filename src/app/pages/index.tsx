'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import TaskCard from "../components/TaskCard";

interface Task {
    id: number;
    title: string;
    color: string;
    completed: boolean;
}
const router = useRouter();
const handleCreateTask = () => {
    // Navigate to the create task page
    router.push('/create-task'); // Adjust the route to your desired path
};
const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/tasks`);
        setTasks(data);
    };

    const toggleComplete = async (id: number) => {
        const task = tasks.find((t) => t.id === id);
        if (task) {
            await axios.put(`http://localhost:5000/api/tasks/${id}`, {
                ...task,
                completed: !task.completed,
            });
            fetchTasks();
        }
    };

    const deleteTask = async (id: number) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="">
            <div className="h-[250px] bg-black flex items-center justify-center">
                {/* <Image
                    src="/images/rocket.png"  // Path from the public directory
                    alt="Sample Image"
                    width={70}  // Width of the image
                    height={100} // Height of the image
                /> */}
                <h1 className="text-2xl font-bold mb-4 text-[#32a1ec] text-4xl">Todo
                    <span className="text-[#5e60ce]">
                        List
                    </span>
                </h1>
            </div>
            <div className="text-center flex justify-center border-t border-t-[#1e6f9f]">
                <button className="w-[736px] h-[50px] -mt-[25px] bg-[#1e6f9f]" onClick={handleCreateTask}>Create Task</button>
            </div>
            <div className="mt-[70px] flex justify-center">
                <div className="w-[736px]">
                <div className="p-4">
                        <h1 className="text-2xl font-bold mb-4">Todo List </h1>
                        <div className="grid gap-4">
                            {tasks.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    {...task}
                                    onToggleComplete={toggleComplete}
                                    onDelete={deleteTask}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between mb-5">
                        <div className="text-[#4ea8de]">
                            Task
                            <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-[#333333] rounded-full ms-2">
                                2
                            </span>
                        </div>
                        <div className="text-[#8284FA]">
                            Completed
                            <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-[#333333] rounded-full ms-2">02</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;
