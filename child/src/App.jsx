import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Taskpage} from './paginas/Taskpage';
import {TaskFormPage} from "./paginas/TaskFormPage"
import { Navigation } from './components/Navigation';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>

<div className="container mx- auto">

<Navigation />
<Routes>
<Route path = "/" element={<Navigate to="/task" />} />
<Route path = "/task" element={<Taskpage/>} /> 
<Route path = "/task-create" element={<TaskFormPage/>} />
<Route path = "/task/:id" element={<TaskFormPage/>} />
</Routes>
<Toaster />

</div>
    
    </BrowserRouter>
  )
}

export default App

