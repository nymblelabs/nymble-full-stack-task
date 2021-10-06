import { movies } from "./db";
import { Movie, MovieInput } from "./types";

export function getMovies(search?: string): Movie[] {
    // TODO
    return movies
}

export function addMovie(input: MovieInput): Movie {
    const movie: Movie = {
        ...input,
        id: movies.length + 1,
        vote_average: 0,
        vote_count: 0
    }
    movies.push(movie)
    return movie
}