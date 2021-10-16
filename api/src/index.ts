import express from "express"
import { genres, movies } from "./db"

const app = express()
const PORT = 5000

/**
 * Return movies that match the 'search term' with movie 'title'.
 * If search term is not provided, return all movies.
 */
app.get('/movies?search=:s', (req, resp) => {
    // req.params.s
    resp.send(movies)
})

/**
 * Return all genres.
 */
app.get('/genres', (req, resp) => {
    resp.send(genres)
})

/**
 * Return movies that match the provided ID.
 */
app.get('/movies/:id', (req, resp) => {
    // const id = Number(req.params.id)
    // TODO Return the movie
})

/**
 * Return genre that match the provided ID.
 */
app.get('/genres/:id', (req, resp) => {
    // TODO
})

/**
 * Add rating to a movie.
 * For simplicity of the task, the array acts as a DB in runtime.
 */
app.post('/movies/:id/ratings', (req, resp) => {
    // TODO
    // req.body.ratingVal
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})