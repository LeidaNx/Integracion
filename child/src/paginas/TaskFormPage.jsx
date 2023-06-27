import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, editTask, getSingle } from "../api/task-api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";



export function TaskFormPage() {

  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();




  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await editTask(params.id, data);
      toast.success('Edit Exitoso!', {
        position: "bottom-center"
      })

    } else {
      await createTask(data);
      toast.success('Exitoso!', {
        position: "bottom-center"
      });
    }
    navigate('/task');
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getSingle(params.id);
        setValue('title', data.title)
        setValue('description', data.description)
      }
    }
    loadTask();
  },);

  return (
    <div className="max-w-xl mx-auto">

      <form onSubmit={onSubmit}>
        <label>Instrumento</label>
        <input type="text" placeholder="title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" />

        <label>Descripción</label>
        <textarea rows="3" placeholder="description"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></textarea>

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3 ">Guardar</button>
      </form>

      {params.id &&

        <div className="flex justify-end">
          
          <button
          className="bg-red-950 p-3 rounded-lg w-48 m-3"
          onClick={async () => {
            const accepted = window.confirm('R U SURE?!?!?!');
            if (accepted) {
              await deleteTask(params.id);
              toast.success('Borrado Exitoso!', {
                position: "bottom-center"
              });
              navigate('/task');
            }
          }}
        >
          Borrar
        </button>

          </div>}

    </div>
  );
}

