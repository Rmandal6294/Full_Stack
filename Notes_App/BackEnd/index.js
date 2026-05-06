import express from 'express'
import fs from 'fs'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from "url";
import { error } from 'console';

const app = express()
const __dirname =path.dirname(fileURLToPath(import.meta.url))

app.use(cors({
    origin : "http://localhost:5173"
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 3000

app.get("/", (req, res)=>{
    res.send("<h1>server running</h1>")
})

app.post("/submit",(req, res)=>{
    const { title, details } = req.body;

    if (!title || !details) {
        return res.status(400).json({ error: "Title and details are required" });
    }

    fs.writeFile(path.join(__dirname, "Files" ,`${title}.txt`), details, (err) => {
        if (err) return res.status(500).json({ error: 'Failed to write file' });
        res.json({ message: 'Note saved!' });
    });
})

app.get("/notes", (req, res)=>{
    fs.readdir(path.join(__dirname, "Files"), (err, files)=>{
        if(err) return res.status(500).json({ error: "directory Not Found!" });

        const textFile = files.filter(file=>file.endsWith(".txt"));

        const notes = textFile.map(file => {
            const content = fs.readFileSync(path.join(__dirname, "Files", file), "utf-8");

            return{
                title: file.replace(".txt", ""),
                details : content
            }
        })

        res.json(notes);
    })
})

app.delete("/notes/:title", (req, res)=>{
    const {title} = req.params;
    const FileName = path.join(__dirname, "Files", `${title}.txt`)

    fs.unlink(FileName , (err)=>{
        if(err) return res.status(500).json({error: "File Not Found!"})
        res.json({message : "Notes Deleted!"})
    })
})

app.get("/notes/:title", (req, res) => {
    const { title } = req.params;
    const FileName = path.join(__dirname, "Files", `${title}.txt`);

    fs.readFile(FileName, "utf-8", (err, data) => {
        if (err) {
            return res.status(404).json({ error: "File Not Found!" });
        }

        res.json({
            title: title,
            details: data
        });
    });
});

app.put("/edit/:title", (req, res)=>{
    const {title} = req.params;
    const { NewTitle, details } = req.body;

    const OldFileName = path.join(__dirname, "Files", `${title}.txt`);
    const NewFileName = path.join(__dirname, "Files", `${NewTitle}.txt`);

    fs.rename(OldFileName, NewFileName, (err)=>{
        if (err) return res.status(500).json({ error: "Rename failed" });

        fs.writeFile(NewFileName, details, (err)=>{
            if (err) return res.status(500).json({ error: "Write failed" });
            res.json({ message: "File updated successfully" });
        })
    })
    
})

app.listen (PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})