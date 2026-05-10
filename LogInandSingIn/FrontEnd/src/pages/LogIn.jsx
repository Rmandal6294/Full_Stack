import LogInFrom from "../Components/LogInFrom"
import axios from "axios"
import Home from "./HomePage"

const LogIn = (props) => {
  const API = props.API

  const HandleSubmit = async (username, password) => {
    if (!username.trim() || !password.trim()){
      return alert("UnFilled Field")
    }
    try {
      const response = await axios.post(`${API}/login`, { username, password })
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      )
      window.location.href = "/home"
    } catch (err){
      console.log(err)
      alert("Wrong Credentials")
    }
  }



  return (
    <div className="bg-black/95 min-w-screen min-h-screen flex justify-center items-center box-border">
      <LogInFrom HandleSubmit = {HandleSubmit}/>
    </div>
  )
}

export default LogIn
