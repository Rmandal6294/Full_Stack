import express from 'express'
import cors from "cors"
import path from 'path'
import { fileURLToPath } from "url";
import userModel from "./models/registerUser.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: "http://localhost:5173"
}))

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = 3000

app.get("/", (req, res) => {
    res.send("<h1> 🌐 Server Running .... </h1>")
})

app.post("/register", async (req, res) => {
    const { firstName, lastName, streetAddress, city, state, pinNum, email, phone, dob, password } = req.body;
    const userName = firstName.toLowerCase() + "_" + phone
    let createUser = await userModel.create({
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        pinNum,
        email,
        phone,
        dob,
        password,
        username: userName
    })
    res.send("<h1> Done </h1>")
})

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username })

    if (!user || user.password !== password) {
        return res.status(401).send("Wrong Login Password!");
    }
    res.send(user)
})

app.put("/update", async (req, res) => {
    const { firstName, lastName, streetAddress, city, state, pinNum, email, phone, dob, password, oldUserName } = req.body;
    const userName = firstName.toLowerCase() + "_" + phone

    let updateUser = await userModel.updateOne(
        { username: oldUserName },
        {
            $set: {
                firstName,
                lastName,
                streetAddress,
                city,
                state,
                pinNum,
                email,
                phone,
                dob,
                password,
                username: userName
            }
        },
        { upsert: true }
    )

    res.send("<h1> Done </h1>")
})

app.post("/email", async (req, res) => {
    const { email } = req.body
    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(404).json({ message: "Email not found!" })
    }
    res.json(user)
})

app.put("/reset", async (req, res)=>{
    const {email, username, password} = req.body;
    await userModel.updateOne(
        { email },
        {
            $set: {
                password,
                username
            }
        },
        { upsert: true }
    )
    res.send("done")
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})