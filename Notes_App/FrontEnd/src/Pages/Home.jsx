import From from '../Components/From'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {
    const [notes, setNotes] = useState([])

    const API = "http://localhost:3000"

    const FetchNotes = async () =>{
        const res = await axios.get(`${API}/notes`)
        setNotes(res.data)
    }

    const DeleteNotes = async (title) =>{
        await axios.delete(`${API}/notes/${title}`)
        FetchNotes();
    }

    useEffect (()=>{
        FetchNotes()
    },[])

    return (
        <div className="bg-indigo-300 h-screen w-screen box-border flex flex-col justify-start">
            <div className="flex flex-col items-center justify-center bg-blue-600/50 font-bold font-mono p-2">
                <h1 className="text-3xl text-white font-extrabold">Notes App</h1>
                <p className="text-white/80 bg-white/20 p-2 rounded mt-3">Welcome to the Notes App!</p>
            </div>

            <div className="p-5">
                <From API = {API} FetchNotes = {FetchNotes}/>
            </div>

            <div className="flex flex-wrap items-center justify-center w-full h-full overflow-auto">
                {notes.map((note, idx)=>(
                    <Card key = {idx} title = {note.title} details = {note.details} onDelete = {DeleteNotes}/>
                ))}
            </div>
        </div>
    )
}

export default Home
