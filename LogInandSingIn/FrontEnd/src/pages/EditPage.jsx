import { useState } from "react"
import axios from "axios"

const EditPage = (props) => {
    const Data = JSON.parse(localStorage.getItem("user"));

    if (!Data) {
        window.location.href = "/"
    }

    const [firstName, setFirstName] = useState(Data.firstName)
    const [lastName, setLastName] = useState(Data.lastName)

    const [streetAddress, setStreetAddress] = useState(Data.streetAddress)
    const [city, setCity] = useState(Data.city)
    const [state, setState] = useState(Data.state)
    const [pinNum, setPinNum] = useState(Data.pinNum)

    const [email, setEmail] = useState(Data.email)
    const [phone, setPhone] = useState(Data.phone)
    const [dob, setDob] = useState(Data.dob)

    const [password, setPassword] = useState(Data.password)
    const [confirm, setConfirm] = useState(Data.password)


    const API = props.API

    const submitForm = async () => {
        if (!firstName.trim() || !lastName.trim() || !streetAddress.trim() || !city.trim() || !state.trim() || !pinNum.trim() || !email.trim() || !phone.trim() || !dob.trim() || !password.trim() || !confirm.trim()) return alert("Fill Up the all Field first !");
        if (password !== confirm) return alert("!Password and Confirm Password not Match")
        const oldUserName = Data.firstName.toLowerCase() + "_" + Data.phone
        try {
            await axios.put(`${API}/update`, { firstName, lastName, streetAddress, city, state, pinNum, email, phone, dob, password, oldUserName })
            localStorage.removeItem("user")
        } catch (err) {
            console.log(err)
            alert("SomeThing Wrong Not Updated !")
        }

        const newUserName = firstName.toLowerCase() + "_" + phone
        try {
            const response = await axios.post(`${API}/login`, { username: newUserName, password })
            localStorage.setItem(
                "user",
                JSON.stringify(response.data)
            )
            window.location.href = "/home"
        } catch (err) {
            console.log(err)
            alert("SomeThing Wrong Try again!")
        }

    }

    const inputClass = "w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-white/70 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition bg-transparent"
    const labelClass = "text-xs font-medium text-stone-500 tracking-wide uppercase"
    const headingClass = "section-title text-lg text-white/50"
    return (
        <div className="bg-black/90 flex flex-col justify-center items-center p-10">
            <div className="bg-black/90 p-10 lg:w-1/2 border border-stone-200 rounded-2xl">
                <h3 className="text-center text-white/20 text-4xl underline mb-10"> Edit User Details </h3>
                <div>
                    <h3 className={headingClass}> Name </h3>
                    <label htmlFor="fname" className={labelClass}>First name</label>
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        name="firstName"
                        type="text" id="fname" placeholder="John"
                        className={inputClass}
                    />

                    <label htmlFor="lname" className={labelClass}>Last name</label>
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        name="lastName"
                        type="text" id="lname" placeholder="Smith"
                        className={inputClass}
                    />
                </div>

                <div>
                    <h3 className={headingClass}> Address </h3>

                    <label htmlFor="street" className={labelClass}>Street address</label>
                    <input
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        name="streetAddress"
                        type="text" id="street" placeholder="123 Main Street, Apt 4B"
                        className={inputClass}
                    />

                    <label htmlFor="city" className={labelClass}>City</label>
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        name="city"
                        type="text" id="city" placeholder="New York"
                        className={inputClass}
                    />

                    <label htmlFor="state" className={labelClass}>State</label>
                    <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        name="state"
                        type="text" id="state" placeholder="NY"
                        className={inputClass}
                    />

                    <label htmlFor="postal" className={labelClass}>Postal code</label>
                    <input
                        value={pinNum}
                        onChange={(e) => setPinNum(e.target.value)}
                        name="pinNum"
                        type="text" id="postal" placeholder="10001"
                        className={inputClass}
                    />
                </div>

                <div>
                    <h3 className={headingClass}> Email </h3>
                    <label htmlFor="email" className={labelClass}>Email address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email" id="email" placeholder="john.smith@example.com"
                        className={inputClass}
                    />
                </div>

                <div>
                    <h3 className={headingClass}>Contact Number</h3>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        type="tel" id="phone" placeholder="+1 (555) 000-0000"
                        className={inputClass}
                    />
                </div>

                <div>
                    <h3 className={headingClass}> Date of Birth </h3>
                    <label htmlFor="dob" className={labelClass}>Date of birth</label>
                    <input
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        name="dob"
                        type="date" id="dob"
                        className={inputClass}
                    />
                </div>

                <div>
                    <h3 className={headingClass}> Password </h3>
                    <label htmlFor="password" className={labelClass}>Set your password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        id="password" placeholder="Enter password"
                        className={`${inputClass} pr-11`}
                    />

                    <label htmlFor="confirm" className={labelClass}>Re-enter password</label>
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

            <div>
                <button onClick={submitForm}
                    className="p-5 bg-yellow-500 w-50 mt-10 rounded text-md text-white/80"> Update → </button>
            </div>
        </div>
    )
}

export default EditPage
