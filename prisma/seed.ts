import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


// Получение одного film
async function getFilm() {
    const film = await prisma.film.findUnique({
        where: {
            id: 1
        }
    })
    console.log(film)
}

// Получение all films
async function getFilms() {
    const films = await prisma.film.findMany()
    console.log(films)
}

// Получение all genres
async function getGenres() {
    const genres = await prisma.genre.findMany()
    console.log(genres)
}



async function main() {
    await getFilm()
    await getFilms()
    await getGenres()
}

// try - catch
main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})