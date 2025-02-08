# Node.js Server Error: Unhandled 'close' event on socket

This repository demonstrates a common error in Node.js servers where an unhandled 'close' event on a socket can lead to unexpected behavior or crashes. The bug occurs when a long-running request is interrupted by the client closing the connection before the server can respond.

## Bug Description

The server uses `setTimeout` to simulate a long-running request. If the client closes the connection before the timeout completes, the server emits an 'close' event on the socket. If not handled correctly, this can lead to errors.

## Solution

The solution involves handling the 'close' event gracefully by ignoring it when the response has already been sent or if the connection was closed prematurely.

## How to reproduce the bug

1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`.
4. Send a request to `http://localhost:3000/`.  
5. Close the connection before 5 seconds, using a tool like curl with --connect-timeout.
6. Observe the server logs for errors.

## How to test the solution

1. Run `node bugSolution.js`.
2. Repeat the steps from the previous section.
3. Notice that the server handles the connection closure gracefully and does not throw errors.

## Note

This is a simplified example. In real-world applications, it's important to handle other socket events and errors appropriately to ensure a robust and resilient server.