# Cigna Application | Renowned Medicine
This application generates data of specialists, and displays them in a filterable user interface.

This application is meant to be a programming assignment as part of the author's job application


## Setup
### Install Node.js
Install the **latest version** [Node.js](https://nodejs.org/en/download/current/).
As of 03/2020, **v13** is stable with these applications.

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
> NOTE: First-time install make take a couple of minutes

## Tests
Run the following commands in their own shell instances to initiate their respective test runners.
```
# Server
make test-server

# UI
make test-ui
```
