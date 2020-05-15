# Cigna Application | Renowned Medicine
This application generates data of specialists, and displays them in a filterable user interface.

This application is meant to be a programming assignment, as part of the author's job application


## Setup
### Install Node.js
Install the **latest version** [Node.js](https://nodejs.org/en/download/current/).
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

## Tests
Run the following commands to initiate their respective test runners.
```
# Server
make test-server

# UI
make test-ui
```

## Windows Environment
The `make` commands will not natively work on a Windows command line environment.
You will need to change into the respective app directories (`server-app` and `ui-app`) and run the
following `npm` commands:
```
npm install  # Install Node.js dependencies
npm start    # Start the local app server
npm test     # Run test runner
```
