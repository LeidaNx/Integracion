import { Link } from 'react-router-dom'



export function Navigation() {
  return (
    <div className='flex justify-between py-3'>
      <Link to="/task ">
        <h1 className='font-bold text-3x1 mb-4'>Task UP</h1>
      </Link>
      <button className='bg-emerald-950 px-3 py-2 rounded-lg'>
        <Link to="/task-create">create Task</Link>
      </button>
    </div>
  )
}

