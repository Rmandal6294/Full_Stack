import { Trash, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const go = `/edit/${props.title}`
  return (
    <div className = "w-1/3 lg:w-1/5 h-50 overflow-clip bg-white/20 p-5 rounded shadow-sm shadow-gray-700/30 font-mono m-5 cursor-pointer relative">
        <p className='font-bold text-lg mb-3 text-blue-500/80'>
            {props.title}
        </p>

        <p className='text-sm text-gray-700/80 pb-3'>
            {props.details}
        </p>
        <div className='text-sm text-blue-500/80 font-bold absolute bottom-0 bg-white/80 rounded w-full text-center flex flex-col items-center justify-between'>
            <Link to = {go} className='block w-full h-full p-1'>Edit/Read More...</Link>
        </div>

        <div className='flex items-center justify-between gap-2 w-fit absolute top-0 right-0'>
                <button
                onClick={() =>{props.onDelete(props.title)}}
                className='block w-fit h-full p-1 bg-red-500 text-white mt-1 rounded'><Trash /></button>
        </div>
    </div>
  )
}

export default Card
