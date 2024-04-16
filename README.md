<h1 align="center">A TypeScript + NextJS + SCSS web app to find details about movies, tv shows and people</h1>

<div align="center">Formatted with BiomeJS, tested with Vitest and Cypress 🎗</div>

<h3 align="center">
  <a href="https://movies.nathanasowata.com/">Visit the live app</a> 
</h3>

![Screenshot](./public/screenshot.png "Screenshot Example")

## About this project 📝

I am a frontend developer with a focus on React and it's ecosystem. This is a showcase project I built to demostrate my skills at this time. It is intended to demonstrate problem sloving encountered by real world web apps including server side data fetching, state management, custom form validation, testing, responsive UI and so on. 
 

## Project structure

- `__test__` Contains unit tests for all components. These test are written with _vitest_ and _@testing-library/react_
- `cypress` Contains all end-to-end tests which I have written with _cypress_.
- `src/app` Contains all the pages that make up this application.
- `src/app/api` Contains server side custom API endpoints.
- `src/components` Contains all reuseable components.
- `src/utils` Contains utility files like custom functions and types which are use across the project. 

## How I built this project

- I used NextJS 14 with App router to setup the project.
- Data used in this project was provided by [TheMovieDB.org](https://developer.themoviedb.org/ "TMDB API Docs") API
- For styling I used SCSS modules which helps me avoid naming clashes.
- At this time next lint does not work with this version of nextjs so I used biomejs for code formatting.
- I used icons which I accessed through react-icons. 
- For unit testing I use vitest with react testig library.
- And I used cypress for end-to-end testing.

## Scripts
- `dev` - Starts the development server
- `format` - Runs code formatting on every file in `src`, `cypress` and `__test__` folders
- `test` - Runs all unit tests with vitest
- `cypress:open` - Opens Cypress and runs the e2e tests.

## License

[MIT](https://opensource.org/licenses/MIT)

<hr>

<<h3 align="center">
  <a href="https://movies.nathanasowata.com/">Visit the live app</a> 
</h3>