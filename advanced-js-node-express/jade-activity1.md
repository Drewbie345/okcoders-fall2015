Jade Activity #1
================

Jade is a templating engine for node.js and is the default rendering engine for the Express web framework that we will be using during class.

Spacing is a big deal with Jade. Use 2 spaces for tabs and you will be good!

The [Jade website](http://jade-lang.com/) is a great resource for learning about Jade.

1. Convert the following HTML code into Jade.

  ```html
  <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8">
              <title>My Title</title>
          </head>
          <body>
            <div id="container">
              <h1 class="big-text">My Heading</h1>
              <ol id="first-list">
                <li>My first list item</li>
                <li>My second list item</li>
                <li>My third list item</li>
              </ol>
            </div>
          </body>
      </html>
  ```

  Here's what you should end up with...

  ```jade
  doctype html
  html(lang='en')
    head
      title= title
    body
      #container
        h1.big-text My Heading
        ol#first-list
          li My first list item
          li My second list item
          li My third list item 
  ```

2. Convert the following HTML Bootstrap snippet to Jade.

  ```html
  <form>
    <div class="form-group">
      <label for="exampleInputEmail">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail" name="exampleInputEmail" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword" name="exampleInputPassword" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" id="exampleInputFile">
      <p class="help-block">Example block-level help text here.</p>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox"> Check me out
      </label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
  ```
  Here's what your Jade could look like...

  ```jade
  form
    .form-group
      label(for='exampleInputEmail') Email Address:
      input.form-control#exampleInputEmail(type='email', name='exampleInputEmail', placeholder='Enter Email')
    .form-group
      label(for='exampleInputPassword') Password:
      input.form-control#exampleInputPassword(type='password', name='exampleInputPassword', placeholder='Password')
    .form-group
      label(for='exampleInputFile') File Input:
      input.form-control#exampleInputFile(type='file', name='exampleInputPassword')
      p.help-block Example block-level help text here.
    .checkbox
      label
        input(type='checkbox') Check me out
    button.btn.btn-default(type='submit') Submit
  ```

3. Create an Express project from scratch (refer to the Express Directions #1 & #2).

4. Add three views to your Express project (use your newfound knowledge of Jade). Use Bootstrap to style your pages.

  For instance:
    * Homepage
    * Photo Gallery Page
    * Contact Form