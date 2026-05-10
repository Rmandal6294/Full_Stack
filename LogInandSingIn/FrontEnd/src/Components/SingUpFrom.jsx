import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const SingUpFrom = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [streetAddress, setStreetAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pinNum, setPinNum] = useState("")

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDob] = useState("")

    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")


    const resetForm = () => {
        setFirstName("")
        setLastName("")
        setStreetAddress("")
        setCity("")
        setState("")
        setPinNum("")
        setEmail("")
        setPhone("")
        setDob("")
        setPassword("")
        setConfirm("")
    }

    const API = props.API

    const submitForm = async () => {
        if(!firstName.trim() || !lastName.trim() || !streetAddress.trim() || !city.trim() || !state.trim() || !pinNum.trim() || !email.trim() || !phone.trim() || !dob.trim() || !password.trim() || !confirm.trim()) return alert("Fill Up the all Field first !");
        if (password !== confirm) return alert("!Password and Confirm Password not Match")
        await axios.post(`${API}/register`, {firstName, lastName, streetAddress, city, state, pinNum, email, phone, dob, password})
        resetForm()
    }

    const inputClass = "w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-white/70 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition bg-transparent"
    const labelClass = "text-xs font-medium text-stone-500 tracking-wide uppercase"
    const sectionClass = "bg-white/20 border border-stone-200 rounded-2xl p-6"
    const badgeClass = "w-6 h-6 rounded-full bg-stone-800 text-white text-xs flex items-center justify-center font-medium"
    const headingClass = "section-title text-lg text-white/50"
    
    return (
        <div className="bg-black/95">
            <div className="lg:w-1/2 mx-auto p-10">
                <div className="mb-10">
                    <p className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-2">Registration</p>
                    <h1 className="section-title text-4xl text-stone-800">Personal Information</h1>
                    <p className="text-stone-400 mt-2 text-sm">Please fill in all fields accurately.</p>
                </div>

                <div className="space-y-5">

                    <div className={sectionClass}>
                        <div className="flex items-center gap-2 mb-5">
                            <span className={badgeClass}>1</span>
                            <h2 className={headingClass}>Name</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="fname" className={labelClass}>First name</label>
                                <input
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    name="firstName"
                                    type="text" id="fname" placeholder="John"
                                    className={inputClass}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="lname" className={labelClass}>Last name</label>
                                <input
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    name="lastName"
                                    type="text" id="lname" placeholder="Smith"
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={sectionClass}>
                        <div className="flex items-center gap-2 mb-5">
                            <span className={badgeClass}>2</span>
                            <h2 className={headingClass}>Address</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="street" className={labelClass}>Street address</label>
                                <input
                                    value={streetAddress}
                                    onChange={(e) => setStreetAddress(e.target.value)}
                                    name="streetAddress"
                                    type="text" id="street" placeholder="123 Main Street, Apt 4B"
                                    className={inputClass}
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="city" className={labelClass}>City</label>
                                    <input
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        name="city"
                                        type="text" id="city" placeholder="New York"
                                        className={inputClass}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="state" className={labelClass}>State</label>
                                    <input
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        name="state"
                                        type="text" id="state" placeholder="NY"
                                        className={inputClass}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="postal" className={labelClass}>Postal code</label>
                                    <input
                                        value={pinNum}
                                        onChange={(e) => setPinNum(e.target.value)}
                                        name="pinNum"
                                        type="text" id="postal" placeholder="10001"
                                        className={inputClass}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={sectionClass}>
                        <div className="flex items-center gap-2 mb-5">
                            <span className={badgeClass}>3</span>
                            <h2 className={headingClass}>Email</h2>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className={labelClass}>Email address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                type="email" id="email" placeholder="john.smith@example.com"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className={sectionClass}>
                        <div className="flex items-center gap-2 mb-5">
                            <span className={badgeClass}>4</span>
                            <h2 className={headingClass}>Phone number</h2>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="phone" className={labelClass}>Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                name="phone"
                                type="tel" id="phone" placeholder="+1 (555) 000-0000"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className={sectionClass}>
                        <div className="flex items-center gap-2 mb-5">
                            <span className={badgeClass}>6</span>
                            <h2 className={headingClass}>Birth date</h2>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="dob" className={labelClass}>Date of birth</label>
                            <input
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                name="dob"
                                type="date" id="dob"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div className={`${sectionClass} flex flex-col gap-4`}>
                        <div className="flex items-center gap-2">
                            <span className={badgeClass}>7</span>
                            <h2 className={headingClass}>Password</h2>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="password" className={labelClass}>Set your password</label>
                            <div className="relative">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    type="password"
                                    id="password" placeholder="Enter password"
                                    className={`${inputClass} pr-11`}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="confirm" className={labelClass}>Re-enter password</label>
                            <div className="relative">
                                <input
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    name="confirm"
                                    id="confirm" placeholder="Confirm password"
                                    className={`${inputClass} pr-11`}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-2 pb-6">
                            <button type="button" onClick={resetForm}
                                className="px-6 py-3 rounded-xl border border-stone-200 text-sm text-stone-500 hover:bg-stone-100 transition cursor-pointer">
                                Reset
                            </button>
                            <button type="button" onClick={submitForm}
                                className="px-8 py-3 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 active:scale-95 transition cursor-pointer">
                                Submit →
                            </button>
                        </div>

                        <div className="mt-5 text-center tracking-tighter text-sm">
                            You have an account? <Link className="text-blue-500 underline" to = "/"> Sing Up </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingUpFrom
