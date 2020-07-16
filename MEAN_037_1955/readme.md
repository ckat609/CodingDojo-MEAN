Assignment: 1955 API
For this assignment, we want you to build a simple API server and communicate with it directly over URL requests. The purpose of this API server is to hold on to a list of people born in the year 1955. In order to allow our API server full functionality over URL, we'll need to make sure all our incoming requests come in as GETs, so don't worry about making your routes RESTful!

GET '/' will serve up the full collection of people born in 1955
GET '/new/:name/' will add a name into the database. So adding Steve Jobs to our database, you'd type in the URL 'localhost:8000/new/Steve Jobs'
GET '/remove/:name/' will delete a name from the database.
GET '/:name' will bring up the document of that particular person.
You won't need EJS and to render views for this assignment. When your server responds, make sure it responds with JSON by using res.json() and pass it the data you want to send.

When navigating to 'localhost:8000/' you should immediately get a page that looks similar to the below example.
