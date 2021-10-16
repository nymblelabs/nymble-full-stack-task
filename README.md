# Nymble FullStack Internship Task

Build a simple Movie Browser Full-Stack application with VueJS frontend and REST API backend.

The movie browser application must be able to do the following,

1. List all movies
2. Search movies by name
3. Display the movie details
4. Add rating to a movie

### Frontend

A new VueJs project is provided to get started.
The starter project has the following stack.,

- Vue2
- Typescript
- Vuex
- Vue Router

> Uses `yarn` package manager

There are no restriction to a particular UI framework. Choose any UI framework of your choice. Some of the mostly used are:

- Vuetify
- Elementio
- Buefy

Deliver a working web application with the following requirements:

##### Screens

- Home page
  - Search box
  - Movie list
- Details page
  - Display the movie information

##### App flow

- Home page is the starting screen
- Fetch and List all the movies from the API
- Search field is used to find movies by title
- When a movie is clicked, it must be taken to it's Details page
- Must be able to add a new movie rating from the Details page
- On clicking back, it should take back to the Homepage

> Note that the client must be communicating with the provided back-end only.
> You can use libraries like [`axios`](https://www.npmjs.com/package/axios) for making API requests.

##### Routing

| Route | Page         |
| ----- | ------------ |
| /     | Home page    |
| /{id} | Details page |

##### Scripts

| Script           | Description                   |
| ---------------- | ----------------------------- |
| `yarn build`     | Compile and build the project |
| `yarn serve`     | Serve the web application     |
| `yarn test:unit` | Run unit test, if any         |

### Backend

The backend starter project has the following stack.,

- Nodejs
- Typescript
- Express
- Some sample data (as DB)

> Uses `yarn` package manager

A working backend is provided that already does the following:

1. List all movies
2. List all genres

Deliver a complete API backend by adding the following requirements:

1. Search functionality for `movies` query
   - If `search` term is empty/null, return all movies
   - If `search` term is provided, return movies that match it's title. (Use contains operation)
2. Implement the missing logics
   - Return movie matching the provided ID
   - Return genres matching the provided ID
3. Implement `/movies/:id/ratings` route to add a new movie rating.
   - The `vote_average` and `vote_count` for that movie must be updated accordingly.
   - Return the updated `movie` data

| Script       | Description                                   |
| ------------ | --------------------------------------------- |
| `yarn build` | Compile and build the project                 |
| `yarn start` | Start the server in port 5000                 |
| `yarn dev`   | Convenient script to build & start the server |
| `yarn test`  | Run test, if any                              |

### Improvements

These are optional improvements that you can add to the client or the backend which will help to boost your submission score.

##### Frontend

1. Write a Unit (or) E2E test for a component or page.
2. Ability to create new movie.

##### Backend

1. Write Unit test for the backend logic.
   - Use the `jest` framework that comes with the project.
   - Run the test using `yarn test` command
2. Modify the `Movie` data to include a Movie poster URL.
   - The frontend must display the poster as well.
3. Filter the movies list by `genre`
   - The frontend must be changed accordingly to support this feature.
4. Sort the movies list by `popularity`
   - The frontend must be changed accordingly to support this feature.
5. Add pagination support to the `movies` query.

### Submission

Upload the code to your Github and share the repository link. It must be a mono repo project only, as provided. Make sure it is a public repository.
Otherwise you can compress the project (.zip) and attached it to the task mail thread.

> All the best!
