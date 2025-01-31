'use client'
import React, { useState } from "react";
import TaskForm from "../../components/TaskForm";
import { useRouter } from "next/router";
import '../../../app/global.css'
interface Task {
    id: number;
    title: string;
    color: string;
    completed: boolean;
};
const NewTask: React.FC = () => {
    const router = useRouter();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const colors = ['bg-white', 'bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-gray-500'];

    // Optional: State to store selected color

    // Function to handle color selection
    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
        console.log(`Selected color: ${color}`); // You can handle the color selection here
    };
    //   const createTask = async (values: { title: string; color: string }) => {
    //     await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, values);
    //     router.push("/");
    //   };

    const createTask = async () => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTodo, color: selectedColor }),
        });
        const todo = await res.json();
        ([...tasks, todo]);
        setNewTodo('');
    };

    return (
        <div className="">
            <div className="h-[250px] bg-black flex items-center justify-center">

                <h1 className="text-2xl font-bold mb-4 text-[#32a1ec] text-4xl">Todo
                    <span className="text-[#5e60ce]">
                        List
                    </span>
                </h1>
            </div>
            <div className="mt-[70px] flex justify-center">
                <div className="w-[736px]">
                    <div>
                        <div className="p-4">
                            <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
                            <TaskForm onSubmit={createTask} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTask;
