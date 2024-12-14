import express, { Express, Request, Response } from "express";
import path from "path";


import filmRouter from "./FilmApp/filmRouter"
import genreRouter from "./GenreApp/genreRouter"

const HOST = 'localhost'
const PORT = 8000

const app = express()

app.use(express.json())

app.set("view engine", "ejs")

app.set("views", path.resolve(__dirname, "./templates"))
app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.use("/film", filmRouter)
app.use("/genre/", genreRouter)

app.get("/", (req: Request ,res: Response) => {
    res.render("main")
})


app.listen(PORT, HOST, () => {
    console.log(`Listening on a port http://${HOST}:${PORT}`)
})