Restful Tasks
Objectives:
Include a service in your existing Angular app
Building off  your Restful Task API assignment, add a service. Add functions to your service that make AJAX requests to all the get routes you made for the Restful Task API. This includes retrieving all tasks and retrieving a task by ID. Depending on how you wrote your API, it may also include deleting a task by ID. For now, have the service print the data it receives to the console. To complete this assignment, the service will need to be created, registered, and injected into the root component. Also, you'll need HttpClient in order to communicate with your server.



** PUBLIC SERVICE ANNOUNCEMENT **

Be mindful that Angular and AngularJS are NOT THE SAME THING. While they are both currently being supported, Angular is a complete rewrite of AngularJS. Their syntax and approach are very different. This is going to help you level up your google-fu! While reading documentation and other resources, if you find solutions for a number version of Angular (2, 4, 5, etc.), you should be fine for the most part, but solutions for AngularJS will lead you down the wrong path. Also, while googling, include -angularjs (note the minus sign) in your query to exclude hits for AngularJS.

** END OF PUBLIC SERVICE ANNOUNCEMENT **

export class HttpService {
   constructor(private _http: HttpClient){
      this.getTasks();
    }
    getTasks(){
    // our http response is an Observable, store it in a variable
       let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
       tempObservable.subscribe(data => console.log("Got our tasks!", data));
    }
}
 Create a service
 Register the service
 Import HttpClientModule into the project
 Inject HttpClient into the service
 Inject the service into the root component
 Write functions in the service that make AJAX requests to all get routes in the Restful Task API
 Invoke each function you wrote in the service and have the service console.log the data it receives
