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

async function addGenres(genres: { name: string; description: string }[]) {
    for (const genre of genres) {
      await prisma.genre.create({
        data: genre,
      });
      console.log(`Genre "${genre.name}" added!`);
    }
  }

async function addFilms(
films: {
    name: string;
    rating: number;
    year: number;
    language: string;
    country: string;
    age: number;
    genreId: number;
    }[]
  ) {
for (const film of films) {
    await prisma.film.create({
    data: film,
    });
    console.log(`Film "${film.name}" added!`);
    }
  }
  



async function main() {
    const genres = [
        { name: 'Action', description: 'Action-packed movies with exciting scenes.' },
        { name: 'Comedy', description: 'Light-hearted movies meant to entertain.' },
      ];
    
    const films = [
    {
      name: 'Die Hard',
      rating: 8.2,
      year: 1988,
      language: 'English',
      country: 'USA',
      age: 18,
      genreId: 1,
    },
    {
      name: 'The Hangover',
      rating: 7.7,
      year: 2009,
      language: 'English',
      country: 'USA',
      age: 18,
      genreId: 2,
    },
  ];
    await getFilm()
    await getFilms()
    await getGenres()
    await addGenres(genres)
    await addFilms(films)
}

// try - catch
main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})