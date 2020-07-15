Modularization - Config and Finishing Touches
The last thing we'll do to modularize our server side code is to remove the database connection from server.js into its own file called mongoose.js in the config folder. This file will also ensure that we run our setter functions to establish our collections in the database well before the controllers try to access them.

It is entirely possible to do this with the usual require. Go ahead and modularize using what you know so far, and then try the bonus challenge.

Bonus challenge:
Another way we can approach our mongoose.js file is to think that we would like to have all our files in the models folder to run their code. To do this, we would need the file path to the models folder. From there, we could make a function that would look at all the .js files within that folder and require them all. This would be more efficient than having to require each file individually, plus it would save us from having to update mongoose.js if we add more models in the future. See the following code snippet to see how this may be handled.

This is a bonus challenge, so of course the provided code is not all you will need. Read your error messages and find what we left out for you to discover.

server/config/mongoose.js
// create a variable that points to the models folder
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
   }
})
Once you're done with this, server.js should be about 15 lines of code. All that's left to do is to move your static and views folders into a folder called client, adjust server.js so it knows where to look for those files, and you've just fully modularized your code into proper MVC architecture! From now on, whenever you start a new project, you may start with this folder structure. Feel free to change it to suit your needs and preferences.
