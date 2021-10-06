import { genres } from "./db"
import { Movie } from "./types"
import { addMovie, getMovies } from "./controller"

const resolvers = {
    Query: {
        movies: (parent: any, args: { search?: string }, context: any) => getMovies(args.search),
        genres: (parent: any, args: any, context: any) => genres,
    },
    Mutation: {
        addMovie: (parent: any, args: { movie: Movie }, context: any) => addMovie(args.movie)
    }
}

export default resolvers