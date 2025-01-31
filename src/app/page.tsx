'use client'
import React, { useEffect, useState } from "react";
import TaskCard from "../app/components/TaskCard";
import Link from "next/link";
import axios from "axios";
import "./globals.css";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const getTasks = async () => {
    const { data } = await axios.get('http://localhost:5000/api/tasks')
    setTasks(data)
  }

  useEffect(() => {
    getTasks()
  }, []);

  const toggleTodo = async (id: number) => {
    const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: 'naa' }),
    });
    const updatedTodo = await res.json();
    // setTasks(tasks.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };


  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter((todo) => todo.id !== id));
  };


  return (
    <div>
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
      <div className="grid gap-4 mt-4">
        <div className="mt-[70px] flex justify-center">
          <div className="w-[736px]">
            {tasks?.map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onDelete={deleteTask}
                onToggleComplete={toggleTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
