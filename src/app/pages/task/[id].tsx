import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import TaskForm from "./../../components/TaskForm";
import '../../../app/global.css'


const EditTask: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [task, setTask] = useState<{ title: string; color: string } | null>(
    null
  );

  useEffect(() => {
    if (id) {
      // Fetch the task details when ID is available
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`)
        .then((response) => setTask(response.data))
        .catch((error) => console.error("Error fetching task:", error));
    }
  }, [id]);

  const updateTask = async (values: { title: string; color: string }) => {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, values);
    router.push("/"); // Navigate back to the home page after updating
  };

  if (!task) return <p>Loading task details...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
      <TaskForm initialValues={task} onSubmit={updateTask} />
    </div>
  );
};

export default EditTask;
