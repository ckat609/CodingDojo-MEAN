Modularizing the Controllers
So far, we've removed all our code that contains our routing logic from server.js and moved that into routes.js. Each of our routes, however, may contain lots of code! This can make our routes.js file large and difficult to search. Let's modularize routes.js by moving the code within each route into another file.

Remember how a server processes a request. Once it looks at the url, it can either send a file back, or it needs to execute some logic in order to determine what its response will be. This logic is handled by the controller.

Take another look at a code snippet that we may find in routes.js:

app.get('/', function (req, res) {
    Quote.find({}, function (err, data){
       if(err){
        // handle error, send response
       }
       else {
       	// handle data, send response 
       }
    })
})
We use app's get method and pass it two arguments, the url and a callback, which is the anonymous function you see as the second argument. Within this callback, the server determines how it will respond. That means that the code within the callback is our controller in action! Let's move all the code that belongs to the controller into its own file in the controllers directory. This is how our folder structure looks now:




Our goal is to change our routes.js so that each url is directed to a particular piece of logic in our controller. Therefore, our controller should have all the logic organized for quick and easy access. Which data structure should we use to achieve this? If you're thinking that we should use an object, you are absolutely correct.

Our controller will contain an object with the different code snippets from each route as values. We should export this object so that routes.js may require it. Below is an example of how we can write our routes once everything is set up:

Routes
app.get('/', function(req, res){
        quotes.index(req, res);
})
Quotes Controller
// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
    	// code...
    },
    create: function(req, res) {
    	// code...
    },
    destroy: function(req, res) {
    	// code...
    }
};


Note: It is convention to pluralize the names of our files within the controller folder. In contrast, when we create files in our models folder, we will give them singular names.
