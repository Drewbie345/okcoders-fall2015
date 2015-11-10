Flickr Project Instructions
===========================

You are going to using a basic AJAX call to the Flickr API to create a website that pulls up images based on a search term. 

NOTE: I've included my code for you to review if you want. But I did not include my API Key (because you don't want that sort of thing available publicly on the internet!) so the code will not run. You will have to insert your own API key into my code to make it work.

Instructions:
-------------

1. Get your API Key. 
  * You will need a Yahoo/Flickr account to do this. I had to create a Yahoo account first and then sign up for Flickr before I could get an API key.
    * https://www.flickr.com/services/api/misc.api_keys.html
    * Select Apply for a Non-Commercial Key
  * Register your app. It asks some basic questions. You're just experimenting so the details aren't that important.

2. Design your page using Bootstrap. Decide how you want your images to display. Practice your HTML/CSS skills and utilize Bootstrap!

3. To be able to search for tagged images in Flickr, your user will need to be able to search for a certain tag. Create this user input. 
  * Add a button that can trigger the AJAX call so that when the user enters a search value, it makes a call to the Flickr API with that search value.

4. Using JQuery, retrieve the JSON response from the Flickr API. Loop through this data to create unique URLs for each image. (See my sample code for an example).

5. Make sure to test your code by trying several search terms. Use the console to debug your code. Practice commenting your code!

EXTENSION: Check out the Flickr API Documentation to see other ways you can use the data! 