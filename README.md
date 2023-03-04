# NodeJS, ExpressJS, EmbeddedJS View Engine

Simple practice using EJS to display and pass on variables from

## Purpose

To practice using EJS view engine to utilize passing variables from JavaScript (server) files to frontend display pages.

### Technologies

- NodeJS
- EmbeddedJS
- ExpessJS
- JavaScript

### Steps

1. Create Folders (main, views > pages, views > partials)
2. Initialize NPM
3. Install Express
4. Install EJS
5. Create JavaScript file, require express, pass function to const app and connect to desired port (i.e. 3000, 8080), create way points ("/" index, "/about" about), render the views
6. Create const variables to pass onto pages. Make sure there are placed as objects key : value as the second parameter for rendering.
7. Create partials, head, nav and footer
8. Create pages, add partials (referenced by: <%- %>)
9. Make sure all variables are passed. (<%= %>)
10. Style with Bootstrap
