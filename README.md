# Image Processing Activity

The goal of this project is to run a webserver that accepts user image uploads, and converts them into a variety of sizes.

## Getting Started
1. Clone this repository to your machine
1. `npm i` to install dependencies
1. Install imagemagick (not the node dependency, the cli tool): `brew install imagemagick`
1. Run the server with `node server.js`
1. Send a request like so: ![sample request in postman](sample-request.png)

## Routes

`POST /upload`: 

## Your task
The `imagemagick` dependency is currently used to process images. You should replace it with [`sharp`](https://www.npmjs.com/package/sharp).

We want to measure the speed improvement that results from this newer, (allegedly) faster library. You could use a profiler like [this](https://blog.logrocket.com/using-inbuilt-node-js-profiler/), or you could just capture the current time before and after the image processing and log the difference.

Consider making a new route that uses the new dependency so you can test them side-by-side.

## Stretch Goals
Does your improvement work as well in the cloud as it does locally? Deploy your service to AWS and measure the speed improvement there. It might be easiest to have your controller routes return the time difference.