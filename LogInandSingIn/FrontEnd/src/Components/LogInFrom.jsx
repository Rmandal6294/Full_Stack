import {User,LockKeyhole} from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const LogInFrom = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className="bg-zinc-800 p-5 flex flex-col justify-between items-center gap-5 font-mono rounded-lg border-2 border-white w-2/3">
       <h1 className="text-center text-white/80  tracking-tighter font-extrabold"> USER LOGIN </h1>
        
        <div className="flex border-2 w-3/4 gap-3 p-2 rounded-lg items-center text-white">
            <User/>
            <input
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            className="border-none outline-none w-full rounded-lg p-1 bg-zinc-800" 
            type="text" name = "username" placeholder="Username" required></input>
        </div>

        <div className="flex border-2 w-3/4 gap-3 p-2 rounded-lg items-center text-white">
            <LockKeyhole/>
            <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="border-none outline-none w-full rounded-lg p-1  bg-zinc-800" 
            type="password" name = "password" placeholder=".........." required></input>
        </div>

        <button
        onClick={(()=>{props.HandleSubmit(username, password)})}
        className= "bg-blue-500 w-1/2 py-2 px-5 text-white rounded-lg cursor-pointer" type="submit"> LOGIN </button>

        <div className="mt-5 text-center tracking-tighter text-sm">
            <p className="text-white/80">
                Forgot <Link className="text-blue-500 underline" to = "/recoveryAccount"> Username / password? </Link>
            </p>

            <p className="text-white/80">
                Don't have an account? <Link className="text-blue-500 underline" to = "/register"> Sing Up </Link>
            </p>
        </div>

    </div>
  )
}

export default LogInFrom
