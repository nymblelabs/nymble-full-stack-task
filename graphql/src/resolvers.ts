import { genres } from "./db"
import { getMovies } from "./controller"

const resolvers = {
    Query: {
        movies: (parent: any, args: { search?: string }, context: any) => getMovies(args.search),
        genres: (parent: any, args: any, context: any) => genres,
    },
    // Mutation: {}
}

export default resolvers