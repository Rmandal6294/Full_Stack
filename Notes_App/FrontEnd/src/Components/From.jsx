import axios from 'axios'
import { useState } from 'react'

const From = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const API = props.API;

    const handleSubmit =  e =>{
        e.preventDefault();
        submitFrom();
    }

    const submitFrom = async () =>{
        if(!title.trim() || !description.trim()) return;
        
        await axios.post(`${API}/submit`, {title, details:description})
        setTitle("")
        setDescription("")
        props.FetchNotes()
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center justify-center mt-5 bg-white/15 p-5 rounded shadow-sm shadow-gray-700/30 font-mono'
            >
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder='Title'
                    required
                    name = "title"
                    className='p-2 rounded mb-3 w-3/4 bg-amber-50 text-gray-800'
                />

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                    name = "details"
                    required
                    className='p-2 rounded mb-3 w-3/4 h-40 resize-none bg-amber-50 text-gray-800'
                />

                <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-1/2' >
                    Add Note
                </button>
            </form>
        </div>
    )
}

export default From
