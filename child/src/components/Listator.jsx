import { useEffect, useState } from "react";
import { getAllTask } from "../api/task-api";
import { Card } from "./Card";
export function Listator() {
    const [tareas, setTask] = useState([]);

useEffect(() => {
    async function loadTasks() {
        const res = await getAllTask ();
        setTask(res.data)
    }
    loadTasks();
}, []);


  return <div className="grid grid-cols-3 gap-3">
    {tareas.map((task) => (
        <Card key = {task.id} task = {task} />
    ))}
</div>;
    
  }
  