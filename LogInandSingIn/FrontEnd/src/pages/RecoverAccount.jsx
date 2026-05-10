import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"

const RecoverAccount = (props) => {

  const API = props.API

  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState("")
  const [pinNum, setPinNum] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dob, setDob] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const handleLayout = (que = "none", ne = "none", eml = "block") => {
    document.getElementById("question").style.display = `${que}`
    document.getElementById("newSet").style.display = `${ne}`
    document.getElementById("emailBox").style.display = `${eml}`
  }

  const getQuestion = async () => {
    if (!email.trim()) return alert("Enter the email")

    try {
      const userData = await axios.post(`${API}/email`, { email })
      setUser(userData.data)
      handleLayout("block", "none", "none")
    } catch (err) {
      console.log(err)
      alert("Email not found!")
    }
  }

  const verifyAns = async () => {
    if (!pinNum.trim() || !dob.trim() || !phone.trim()) return alert("Fill The all Fields")

    if (pinNum !== user.pinNum || dob !== user.dob || phone !== user.phone) {
      alert("Not Match your answer !! RE-TRY !!");
      handleLayout()
      return;
    }

    handleLayout("none", "block", "none")
  }

  const resetPassword = async () => {
    if (!userName.trim() || !password.trim() || !confirm.trim()) return alert("Fill Out Field!")
    if (password !== confirm) return alert("Password Not Match to Confirm Password")
    try {
      await axios.put(`${API}/reset`, { username: userName, password, email })
      alert("Username AND Password Reset")
      handleLayout()
    } catch (err) {
      console.log(err)
      alert("Enteral Error")
    }

  }

  useEffect(() => {
    handleLayout()
  }, [])

  const inputClass =
    "w-full border border-stone-700 rounded-xl px-4 py-3 text-sm text-white bg-stone-900 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition";

  const labelClass =
    "text-xs font-medium text-stone-400 tracking-wide uppercase mb-2 block";

  const btnPrimary =
    "w-full py-3 rounded-xl bg-stone-100 text-stone-900 text-sm font-semibold hover:bg-white active:scale-95 transition cursor-pointer";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black/95 p-10">
      <div className="w-full lg:w-1/2 bg-stone-950 border border-stone-800 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-3">
            Forgot Password
          </h1>

          <p className="text-sm text-stone-400 leading-relaxed">
            Please enter the email address you'd like your password reset
            information sent to
          </p>
        </div>

        <div id="emailBox" className="space-y-4 mb-8">
          <div>
            <label className={labelClass}>Enter your email address</label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email" id="email" placeholder="john.smith@example.com"
              className={inputClass}
            />
          </div>

          <button
            onClick={getQuestion}
            className={btnPrimary}>GET QUESTIONS</button>
        </div>

        <div id="question" className="space-y-4 mb-8 border-t border-stone-800 pt-6">
          <p className="text-sm text-stone-300">
            Enter your Postal Number
          </p>

          <input
            value={pinNum}
            onChange={(e) => setPinNum(e.target.value)}
            name="pinNum"
            type="text" id="postal" placeholder="10001"
            className={inputClass}
          />

          <p className="text-sm text-stone-300">
            Enter your phone Number
          </p>

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            type="tel" id="phone" placeholder="+1 (555) 000-0000"
            className={inputClass}
          />

          <p className="text-sm text-stone-300">
            Enter your Date of Birth
          </p>

          <input
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            name="dob"
            type="date" id="dob"
            className={inputClass}
          />
          <button onClick={verifyAns} className={btnPrimary}>Verify</button>
        </div>

        <div id="newSet" className="space-y-5 border-t border-stone-800 pt-6">
          <div>
            <label className={labelClass}>Enter your new Username</label>

            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="New Username"
              className={inputClass}
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className={labelClass}>Enter your new password</label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                id="password" placeholder="Enter password"
                className={`${inputClass} pr-11`}
              />
            </div>

            <div>
              <label className={labelClass}>Confirm new password</label>

              <input
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                name="confirm"
                type="password"
                id="confirm" placeholder="Confirm password"
                className={`${inputClass} pr-11`}
              />
            </div>
          </div>

          <button onClick={resetPassword} className={btnPrimary}>Reset Password</button>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-sm text-stone-400 hover:text-white transition"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecoverAccount;
