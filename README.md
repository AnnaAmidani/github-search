# Github search tool

Web Gui for searching through repositories hosted on GitHub using features like search by keyword, topic, search in code, and others advanced filters.

This project makes use of Angular CLI (https://github.com/angular/angular-cli) version 6.0.8, and talks to the GitHub search API version 3 (https://developer.github.com/v3/search/).

## Build and run instructions
(Min requirement Node 9 and Npm 5.5)
```
git clone https://github.com/AnnaAmidani/github-search.git
cd github-search
npm install @angular/cli
```

Run `ng serve` for a dev server (or `npm run-script start`).
Navigate to `http://localhost:4200/`. 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running lint

Run `ng lint` to execute the linting of your code via [tsLint](https://palantir.github.io/tslint/).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

