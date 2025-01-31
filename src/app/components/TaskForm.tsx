import Link from "next/link";
import React, { useState } from "react";

interface TaskFormProps {
    initialValues?: { title: string; color: string };
    onSubmit: (values: { title: string; color: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialValues, onSubmit }) => {
    const [title, setTitle] = useState(initialValues?.title || "");
    const [color, setColor] = useState(initialValues?.color || "blue");
    const colors = ['bg-white', 'bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-gray-500'];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, color });
    };
    // Fu
    // nction to handle color selection
    const handleColorSelect = (color: string) => {
        setColor(color);
        console.log(`Selected color: ${color}`); // You can handle the color selection here
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
            <div className="text-center flex justify-center border-t border-t-[#1e6f9f]">
                <Link href="/pages/task/new" className="w-[736px] h-[50px] -mt-[25px] bg-[#1e6f9f] flex justify-center items-center">
                Create Task
                </Link>
            </div>
            <div className="flex justify-center">
                <div className="w-[736px] ">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="text-[#4EA8DE]">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="p-2 w-full bg-[#000000] h-[52px] text-white"    
                                required
                            />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="color" className="text-[#4EA8DE]">
                                Color
                            </label>
                            {/* <label className="text-[#4EA8DE]">Color</label> */}
                            <ul className="flex flex-wrap gap-4">
                                {colors.map((color, index) => (
                                    <li
                                        key={index}
                                        className={`w-[52px] h-[52px] rounded-full cursor-pointer ${color} ${color === color ? 'border-4 border-black' : ''}`}
                                        onClick={() => handleColorSelect(color)}
                                    ></li>
                                ))}
                            </ul>

                        </div>
            {/* 
                        <div className="flex flex-col gap-2">
                            <label htmlFor="color" className="font-medium">
                                Color
                            </label>
                            <select
                                id="color"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                className="p-2 border rounded"
                            >
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                            </select>
                        </div> */}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;
