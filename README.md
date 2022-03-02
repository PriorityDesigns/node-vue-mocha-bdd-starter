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
## Using Docker
- Make sure Docker is installed and running
  - https://www.docker.com/products/docker-desktop
- To build and run:
    ```bash
    > cd app
    > ./build-docker.sh
    > ./start-docker.sh
    ```
- Access application in the browser at `localhost:3000`

## Using node locally
- Make sure node is installed
  - Tested with node.js LTS (16.13.1)
- Install dependencies (do this once or if new packages are added):
    ```bash
    > cd app/client
    > npm install
    ```
- Run app using:
    ```bash
    > cd app
    > ./start-server.sh
    ```
- Run tests using:
    ```bash
    > cd app
    > ./run-tests.sh
    ```
- Access application in the browser at `localhost:3000`