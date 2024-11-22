import express, { Express, Request, Response } from "express";
import path from "path";



const HOST = 'localhost'
const PORT = 8000

const app = express()

app.use(express.json())


// устанавливаем шаблонизатор с помощью которого будут рендериться шаблоны (при res.render)
app.set("view engine", "ejs")

// устанавливаем местонахождение шаблонов для шаблонизатора (вместо дефолтного views)
app.set("views", path.resolve(__dirname, "./templates"))

// Настраиваем раздачу статических файлов по пути /static/,
// указывая директорию в которой лежат статик файлы (public)
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.get("/", (req: Request ,res: Response) => {
    res.render("main")
})


app.listen(PORT, HOST, () => {
    console.log(`Listening on a port http://${HOST}:${PORT}`)
})