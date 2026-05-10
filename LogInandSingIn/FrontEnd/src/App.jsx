import { Routes, Route } from "react-router-dom"
import Home from "./pages/HomePage"
import LogIn from "./pages/LogIn"
import RecoveryAccount from "./pages/RecoverAccount"
import SingUpFrom from "./Components/SingUpFrom"
import EditPage from "./pages/EditPage"

const App = () => {
  const API = "http://localhost:3000"
  return (
    <Routes>
      <Route path="/" element = {<LogIn API = {API}/>} />
      <Route path = "/recoveryAccount" element={<RecoveryAccount API = {API}/>}/>
      <Route path = "/register" element={<SingUpFrom API = {API}/>} />
      <Route path = "/home" element={<Home API = {API}/>}/>
      <Route path = "/edit" element={<EditPage API = {API}/>}/>
    </Routes>
  )
}

export default App
