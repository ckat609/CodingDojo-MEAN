Modularizing Models
We've created a controllers folder and our controllers references our models in order to query the database. However, the models are still being declared in server.js. Let's return to server.js and move the code that defines our models into its own folder. Below is some sample code that probably resembles your own code in server.js.

const QuoteSchema = new mongoose.Schema({
	quote: {type: String, required: true, minlength:10},
	author: {type: String, required: true},
        }, {timestamps: true })
mongoose.model('Quote', QuoteSchema); 
Keep in mind that this code is setting our collection in the database. We must have our collection set in our database before we can use it! We may move this code into our models folder as long as the setter still runs before our controller runs the getter function.

The convention is to name the files in your models folder with the singular name of your controllers. For example, if you have a file in your controllers folder called quotes.js, then the file in the models folder that corresponds with the controller should be quote.js.
