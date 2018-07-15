# Github search tool

Web Gui for searching through repositories hosted on GitHub using features like search by keyword, topic, search in code, and others advanced filters.

This project makes use of Angular CLI (https://github.com/angular/angular-cli) version 6.0.8, and talks to the GitHub search API version 3 (https://developer.github.com/v3/search/).

## Build and run instructions
(Min requirement Node 9 and Npm 5.5)
```
git clone https://github.com/AnnaAmidani/github-search.git
cd github-search
```

If you install angular CLI globally, you can use:

```
cd github-search
npm -g install @angular/cli
ng serve
```

Alternatively, if you install it locally to the project you can use:
```
cd github-search
npm install @angular/cli
npm run-script start
```

FInd the dev server at `http://localhost:4200/`. 

## Build

Run `ng build` or `npm run-script build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running lint

Run `ng lint` or `npm run-script lint` to execute the linting of your code via [tsLint](https://palantir.github.io/tslint/).

## Running unit tests

Run `ng test` or `npm run-script test` to execute the unit tests via [Karma](https://karma-runner.github.io).

