import express from "express"
import { ApolloServer } from "apollo-server-express"
import { makeExecutableSchema } from "@graphql-tools/schema"

import typeDefs from "./schema"
import resolvers from "./resolvers"

const schema = makeExecutableSchema({ typeDefs, resolvers })
const server = new ApolloServer({ schema })

const app = express()
server.applyMiddleware({ app })

const PORT = 5000

app.listen({ port: PORT }, () => {
    console.log(`Server listening at http://localhost:${PORT}${server.graphqlPath}`)
})