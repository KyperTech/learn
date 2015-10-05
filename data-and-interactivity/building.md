# Building
This will be our intro to [jQuery](https://jquery.com/) and javascript. jQuery is just a library built on top of javascript so that we can easily interact with the HTML and with API endpoints.

## Lesson
- [Make an interactive website](https://www.codecademy.com/en/skills/make-an-interactive-website) - **4 hours** (Unit 5 is optional)

## Project
Using the skills we've learned from the lesson let's build out our design. Once again let's [download our boilerplate](https://html5boilerplate.com/). In the `<head>` tag of our `index.html` let's add jQuery. Search for jQuery cdn (content delivery network) and add it to the head so that on page load we can use jQuery in our javascript files. The tag we add will look something like this `<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>`. Now that you've told your `index.html` to load jQuery you can go crazy with any jQuery magic you've learned from the lesson. 

For listing elements be sure to [consult your friend google](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=jquery+each+element) on how to implement using jQuery. Now we need some sort of database to store what we and others input, delete and modify. While google spreadsheets is not a great permanent solution, for the meantime it'll work just fine. [Here is a service](https://sheetsu.com/) to help you convert your spreadsheet into an API. Now using the API and jQuery's built in [AJAX library](http://www.w3schools.com/jquery/ajax_ajax.asp) we can load and save data to the spreadsheet. 