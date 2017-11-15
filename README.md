# UselessPoint.js
 Have you ever thought your code was too short or that it didn't
 seem like you did any work? Does your boss think you're slacking
 off because you only have 3 packages imported? Well look no further,
 introducing uselessPoint.js. This library does absolutely nothing 
 other than use up your memory or extend your run time.

 ## Getting Started
 ```bash
 npm install uselesspoint 
 ```

 ## Usage
 ```js
 var uselessPoint = require('uselessPoint');
 
 //Given a number, it'll do useless operations to extend the runtime
 //Returns a bool
 uselessPoint.extendTime(12);

 //Declares random empty objects to use up your memory
 //Function returns a length of built in array
 uselessPoint.spacer();

 ```

 ## Test
 ```
 npm test
 ```
 ## TO DO
 * Add more useless functions
 * Waste more space
 * Add other shenanigans
