# node-vue-mocha-bdd-starter
A front-end client starter project that is setup using node.js + vue.js + mocha and chai for unit and [BDD testing](https://en.wikipedia.org/wiki/Behavior-driven_development)

## VS Code Setup
- Critical extensions:
  - Vetur
    - Publisher: Pine Wu
    - VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=octref.vetur
- Helpful extensions:
  - Code Spell Checker
    - Publisher: Street Side Software
    - VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

# Build, Run and Test
## Create .env file
- Within the app directory, create .env file with the following contents:
```
NODE_ENVIRONMENT=dev
NODE_CLIENT_VOLUME=./client
NODE_TLS_REJECT_UNAUTHORIZED=0
```

## Using Docker
- Make sure Docker is installed and running
  - https://www.docker.com/products/docker-desktop
- To build and run:
    ```bash
    > cd scripts
    > ./build-docker.sh
    > ./docker-start.sh
    ```
- Access application in the browser at `localhost:3000`

## Using node locally
- Make sure node and npm is installed
  - Tested with node.js LTS (16.13.1)
- Install dependencies (do this once or if new packages are added):
    ```bash
    > cd app/client
    > npm install
    ```
- Run app using:
    ```bash
    > cd scripts
    > ./node-start.sh
    ```
- Run tests using:
    ```bash
    > cd scripts
    > ./run-tests.sh
    ```
- Access application in the browser at `localhost:3000`