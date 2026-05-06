import From from "../Components/From"
import { useState, useEffect } from "react"
import axios from 'axios'

const Edit_Readmore = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleEdit = (e) => {
        e.preventDefault();
        EditData()
    }

    const EditData = async() =>{
        if(!title.trim() || !description.trim()) return;
        
        await axios.put(`${API}/edit/${titleName}`, {NewTitle:title, details:description})
        setTitle("")
        setDescription("")
        FetchNotes()
        window.location.href = "/";
    }

    const [isEdit, setIsEdit] = useState(false)

    var styleInput, styleBox, styleButton;

    if (isEdit) {
        styleInput = "p-2 rounded mb-3 w-3/4 text-gray-800 bg-amber-50 cursor-pointe"
        styleBox = "p-2 rounded mb-3 w-3/4 h-40 resize-none text-gray-800 bg-amber-50 cursor-pointe"
        styleButton = "bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-1/2"
    } else {
        styleInput = "p-2 rounded mb-3 w-3/4 text-gray-800 bg-amber-50/50 cursor-not-allowed"
        styleBox = "p-2 rounded mb-3 w-3/4 h-40 resize-none text-gray-800 bg-amber-50/50 cursor-not-allowed"
        styleButton = "bg-blue-500/50 text-white px-4 py-2 rounded cursor-not-allowed w-1/2"

    }

    const [notes, setNotes] = useState([])

    const API = "http://localhost:3000"

    const getFileName = () => {
        const url = new URL(window.location.href);
        const value = url.pathname.split("/").pop();
        const decodedValue = decodeURIComponent(value);
        return decodedValue;
    }

    const titleName = getFileName();

    const FetchNotes = async () => {
        const res = await axios.get(`${API}/notes/${titleName}`)
        setNotes(res.data)
    }

    useEffect(() => {
        FetchNotes()
    }, [])

    return (
        <div className="bg-indigo-300 h-screen w-screen box-border flex flex-col justify-start overflow-auto">
            <div className="flex flex-col items-center justify-center bg-blue-600/50 font-bold font-mono p-2 sticky top-0">
                <h1 className="text-3xl text-white font-extrabold">Notes App</h1>
                <p className="text-white/80 bg-white/20 p-2 rounded mt-3">Read Full Notes || Edit your File </p>
            </div>

            <div className="mb-20 lg:flex lg:justify-between lg:items-center lg:gap-10">
                <div className="font-bold text-white/90 p-3 font-serif lg:w-1/2">
                    <h1 className="text-3xl bg-blue-600/60 p-2 rounded-lg">{notes.title}</h1>

                    <p className="pl-5 text-justify"> {notes.details} </p>

                    <button
                        onClick={() => {
                            document.getElementById("title").removeAttribute("disabled")
                            document.getElementById("details").removeAttribute("disabled")
                            setIsEdit(true)
                        }}
                        className="bg-green-600/80 w-1/4 p-2 rounded cursor-pointer mt-7"> Edit </button>
                </div>

                <div className="lg:w-1/2 mb-10">
                    <form
                        onSubmit={handleEdit}
                        className='flex flex-col items-center justify-center mt-5 bg-white/15 p-5 rounded shadow-sm shadow-gray-700/30 font-mono'
                    >
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder='Title'
                            required
                            disabled
                            name="title"
                            id="title"
                            className={styleInput}
                        />

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Description'
                            name="details"
                            id="details"
                            required
                            disabled
                            className={styleBox}
                        />

                        <button
                            type='submit'
                            className={styleButton} >
                            Done
                        </button>
                    </form>
                </div>

                <button
                onClick={()=>{window.location.href = "/"}} 
                className="bg-white text-blue-600 flex justify-center items-center m-auto px-5 py-2 rounded shadow-2xl shadow-black/70 cursor-pointer">
                    Back to Home
                </button>
            </div>

            <div className='bg-white/30 p-2 text-center text-sm fixed bottom-0 w-full'>
                <p className='font-extrabold text-sm text-white/90'> Fullstack || Project-1 || 06 - 05 - 2026 </p>
            </div>
        </div>
    )
}

export default Edit_Readmore
