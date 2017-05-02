IMDB Fetch Sample App

Pre-Requisites
   
    node.js (7.8.0 or higher, tested with 7.8.0) - To install use nvm or download manually from https://nodejs.org/en/download/current/


Installation and Execution

     -- API --
     Open up a terminal/shell
     cd to the main directory of the repository
     npm run init
     npm run dev
     
     -- Frontend --
     Open up another terminal/shell
     cd to the main directory of the repository and then into the frontend directory
     cd frontend/
     npm run init
     npm run dev
     

Direct API Calls

    Using postman or other api client you can do the following:
    
    POST: http://localhost:8088/api/vendor/imdb
    Make raw body content type application/json with format below and submit
    
    {
    	"message": {
    		"name": "help"
    	}
    }
    
Angular Application

    Once "npm run dev" has been executed webpack should provide frontend access.
    
    Open up a browser and goto http:\\localhost:3000 and you should be taken to the imdb search page.

Thought Process

    I wanted to deal with the api in a way that cordoned off the various concerns of the application.  The primary data 
    layer for the application should not be held captive by the vendor specific use case (in this example the imdb 
    query).  In order to keep these concerns separate the api/backend portion has an API class that will load various 
    vendor API's that have been defined inside of /lib/apis.  These modules can then function independently of each 
    other and the application can have its own api routing to serve them however it wants.
    
    The frontend is pretty straightforward.  It does leverage webpack in order to make builds/packaging easier although
    this is excessive for the scope of this example.  The imdb search component utilizes a middleware service 
    (HttpHandler) to handle the api interaction and should be easy to use and expand to allow for more control.
    
    