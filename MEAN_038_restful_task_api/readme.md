Restful Task API
Using your new knowledge of 'Restful Routing', create an application with endpoints (routing rules) which offer CRUD operations for 'tasks'. We should be able to use this API for the following commands:

GET: Retrieve all Tasks
GET: Retrieve a Task by ID
POST: Create a Task
PUT: Update a Task by ID
DELETE: Delete a Task by ID
The tasks should be returned in a JSON format. Consider the tasks as objects with the following properties:

_id: (string) (default id generated by mongoDB)
title: (string)
description: (string, default to empty string)
completed: (boolean, default to: false)
created_at: (date, default to current date)
updated_at: (date, default to current date)
Once your API is complete and your routing rules are in place, and follow the 'restful routing' standards, use the 'postman' browser extension to test your routing rules. 'Postman' is a simple (and quite popular) browser extension that allows you to prepare your own HTTP requests, serving as an ideal tool for testing your server's API.



Using Postman:

1.  When you open Postman, click on 'Collection'  to create a new set of routes for a particular project. For this assignment, name your collection 'Task API'.



2.  In the sidebar, you will see a list of your collections. If you just created your first collection, that will be the only one you see, and it will not have any requests yet. Let's make some requests!





3. To the left, you'll see a dropdown to choose the kind of request you would like to make. You also have an input field to type the route for your request. If you have your Restful Task API assignment running, you may make a get request to localhost:8000/tasks. Click Send and see the response from your API below.
