Advanced CSS Activity
=====================

You have seen the power of CSS classes and ids, but did you know that you can style a page without any classes or ids?

````html
  <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>More Advanced CSS</title>
            <style>
              /* This first style uses a CSS id */
              #first {
                color: blue;
              }

              /* But this second style uses a different type of CSS selector; it selects every <h1> element that is the second child of its parent */
              h1:nth-child(2) {
                color: red;
              }
            </style>
        </head>
        <body>
          <div>
            <h1 id="first">My First Heading</h1>
            <h1>My Second Heading</h1>
            <h1>My Third Heading</h1>
          </div>
        </body>
    </html>
````

To see a more complete list of CSS selectors, check out this [cheat sheet](http://www.cheetyr.com/css-selectors).

TRY IT OUT:

For this exercise, copy and paste the code below into a file and save it with .html format. 

Your mission: Style this page without using any CSS classes/ids.

````html
  <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Advanced CSS Activity</title>
            <!-- link to your CSS file here -->
        </head>
        <body>
          <h1>My Heading</h1>
          <p>Bacon ipsum dolor amet cupim spare ribs sausage bresaola shank landjaeger tri-tip short ribs ball tip, bacon prosciutto pork loin. Alcatra ribeye turducken pork belly ground round chuck brisket ham rump short ribs filet mignon venison fatback bacon. Shankle hamburger filet mignon jerky pastrami venison prosciutto swine bacon tail shoulder strip steak. Porchetta ham hock capicola brisket tail. Ball tip turkey sirloin turducken kevin tenderloin boudin. Ham salami chicken, corned beef pork belly pork chop tongue venison.</p>
          <p>Bacon ipsum dolor amet cupim spare ribs sausage bresaola shank landjaeger tri-tip short ribs ball tip, bacon prosciutto pork loin. Alcatra ribeye turducken pork belly ground round chuck brisket ham rump short ribs filet mignon venison fatback bacon. Shankle hamburger filet mignon jerky pastrami venison prosciutto swine bacon tail shoulder strip steak. Porchetta ham hock capicola brisket tail. Ball tip turkey sirloin turducken kevin tenderloin boudin. Ham salami chicken, corned beef pork belly pork chop tongue venison.</p>
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
          <img src='http://placekitten.com/200/300' />
        </body>
    </html>
````