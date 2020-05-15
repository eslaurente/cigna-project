# Cigna Application | Renowned Medicine
This application generates data of specialists, and displays them in a filterable user interface.
This application is meant to be a programming assignment, as part of the author's job application.

## Technologies
#### UI
[Angular v9](https://angular.io/docs) | [TypeScript](https://www.typescriptlang.org/docs/home.html) |
[Angular Material](https://material.angular.io/components/categories) | [NgRx](https://ngrx.io/docs) |
[RxJS](https://rxjs.dev/api) | [Karma](https://karma-runner.github.io/5.0/intro/how-it-works.html) |
[Jasmine](https://jasmine.github.io/pages/docs_home.html)
#### Server
[Node.js](https://nodejs.org/en/download/current/) | [TypeScript](https://www.typescriptlang.org/docs/home.html) |
[Express](https://expressjs.com/en/4x/api.html) | [Mocha](https://mochajs.org/#getting-started) |
[Chai](https://www.chaijs.com/api/)


## Setup
### Install Node.js
Install the latest version of [Node.js](https://nodejs.org/en/download/current/).
As of May 2020, the applications are stable with **v13** and **v14**.

## Running the Applications
The Node.js server application and Angular local server application need to 
run in separate shells.

### Terminal #1 – Server
```
make run-server
```

### Terminal #2 – UI
```
make run-ui
```
> NOTE: First-time install may take several minutes

While the server is running on `localhost:3000`, in a web browser, visit
[http://localhost:42000](http://localhost:42000) to run the application.

## Tests
Run the following commands to initiate their respective test runners.
```
# Server
make test-server

# UI
make test-ui
```
> NOTE:, if you try to run the Angular e2e test, ensure that the server is also running

## Windows Environment
The `make` commands will not natively work on a Windows command line environment.
You will need to change into the respective app directories (`server-app` and `ui-app`) and run the
following `npm` commands:
```
npm install  # Install Node.js dependencies
npm start    # Start the local app server
npm test     # Run test runner
```
