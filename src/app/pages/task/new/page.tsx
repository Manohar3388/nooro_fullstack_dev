'use client'
import React, { useState } from "react";
import TaskForm from "@/app/components/TaskForm";
import { useRouter } from "next/navigation";
interface Task {
    id: number;
    title: string;
    color: string;
    completed: boolean;
};
const NewTask: React.FC = () => {
    const router = useRouter()
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
    //    
    //   };

    const createTask = async (any: any) => {
        const res = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: any.title, color: any.color }),
        });
        await res.json();
        router.push("/");

    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
            <TaskForm onSubmit={createTask} />
        </div>
    );
};

export default NewTask;
