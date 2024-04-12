const express = require('express')
require('dotenv').config()
const app = express()
const port = 8080
const data = [
  {
    "id": 1,
    "movie": "The Shawshank Redemption",
    "rating": 9.2,
    "image": "images/shawshank.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0111161/"
  },
  {
    "id": 2,
    "movie": "The Godfather",
    "rating": 9.2,
    "image": "images/godfather.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0068646/"
  },
  {
    "id": 3,
    "movie": "The Dark Knight",
    "rating": 9,
    "image": "images/dark_knight.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0468569/"
  },
  {
    "id": 4,
    "movie": "Pulp Fiction",
    "rating": 8.9,
    "image": "images/pulp_fiction.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0110912/"
  },
  {
    "id": 5,
    "movie": "The Lord of the Rings: The Return of the King",
    "rating": 9,
    "image": "images/lotr_return_king.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0167260/"
  },
  {
    "id": 6,
    "movie": "The Good, the Bad and the Ugly",
    "rating": 8.8,
    "image": "images/good_bad_ugly.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0060196/"
  },
  {
    "id": 7,
    "movie": "Fight Club",
    "rating": 8.8,
    "image": "images/fight_club.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0137523/"
  },
  {
    "id": 16,
    "movie": "Saving Private Ryan",
    "rating": 8.6,
    "image": "images/saving_private_ryan.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0120815/"
  },
  {
    "id": 17,
    "movie": "Parasite",
    "rating": 8.6,
    "image": "images/parasite.jpg",
    "imdb_url": "https://www.imdb.com/title/tt6751668/"
  },
  {
    "id": 18,
    "movie": "Gladiator",
    "rating": 8.5,
    "image": "images/gladiator.jpg",
    "imdb_url": "https://www.imdb.com/title/tt0172495/"
  },
  {
    "id": 97,
    "movie": "Little Women",
    "rating": 7.8,
    "image": "images/little_women.jpg",
    "imdb_url": "https://www.imdb.com/title/tt3281548/"
  },
  {
    "id": 98,
    "movie": "Ford v Ferrari",
    "rating": 8.1,
    "image": "images/ford_v_ferrari.jpg",
    "imdb_url": "https://www.imdb.com/title/tt1950186/"
  },
  {
    "id": 99,
    "movie": "The Irishman",
    "rating": 7.8,
    "image": "images/the_irishman.jpg",
    "imdb_url": "https://www.imdb.com/title/tt1302006/"
  },
  {
    "id": 100,
    "movie": "Marriage Story",
    "rating": 7.9,
    "image": "images/marriage_story.jpg",
    "imdb_url": "https://www.imdb.com/title/tt7653254/"
  }
]
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/souptik', (req, res) => {
  res.send('Hello Souptik!')
})

app.get("/apiData", (req, res) => {
  res.json(data)
})

app.get("/register", (req, res) => {
  res.send("<h1>Register</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app that is listening on port ${port}`)
}) 