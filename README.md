# How to Setup

## Prerequisites

- Node.js and npm: You can download them from [here](https://nodejs.org/).

## Setup

1. Clone the repository to your local machine.

2. Navigate to the project directory.

3. Install the project dependencies by running:

```bash
npm install
```

This will install which are listed as devDependencies in the `package.json` file.

## Execute the Code

To run the code, you can use the TypeScript compiler (`tsc`) to compile your TypeScript code to JavaScript, and then run the JavaScript code using Node.js.

First, compile the TypeScript code:

```bash
npx tsc
```

Then, you can run the JavaScript code with Node.js.

```bash
node ./dist/src/index.js
```

## Running the Tests

To run the tests, you can use the `npm test` command:

```bash
npm test
```

