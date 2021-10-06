import { gql } from "apollo-server-core";

const typeDefs = gql`

    type Movie {
        id: Int!
        title: String!
        release_date: String!
        popularity: Float!
        overview: String!
        vote_average: Float!
        vote_count: Int!
        adult: Boolean!
        genre_ids: [Int!]!
    }

    type Genre {
        id: Int!
        name: String!
    }

    type Query {
        movies(search: String): [Movie!]!
        genres: [Genre!]!
    }

    # type Mutation {
        # addRating(...): Movie!
    # }

`

export default typeDefs