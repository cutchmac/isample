IMDB Fetch Sample App

Pre-Requisites
   
    node.js (7.8.0 or higher, tested with 7.8.0) - To install use nvm or download manually from https://nodejs.org/en/download/current/


Installation

     npm install
        

Execution

    npm run start
    - or -
    node server.js
    

Thought Process

    I wanted to do this in a way that cordoned off the various concerns of the application.  The primary data layer for
    the application should not be held captive by the vendor specific use case (in this example the imdb query).  In 
    order to keep these concerns separate the api/backend portion has an API class that will load various vendor API's
    that have been defined inside of /lib/apis.  These modules can then function independently of each other and the
    application can have its own api routing to serve them however it wants.
    
    The front-end application is a simple angular single page application that uses xhr requests to query the server
    and display the results.