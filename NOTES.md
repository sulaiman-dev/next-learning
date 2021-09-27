1. Introduction.
2. Hello World App.
   - Command npx create-next-app my-next-app. 
   - Navigate to app folder and run the app.
     - "yarn dev" or "npm run dev".
3. Project Structure.
   - Command npx create-next-app app-name. 
   - Navigate to app folder and run the app.
     - "yarn dev" or "npm run dev".
   - Walking through different files and folders created.
     - package.json file (scripts, dependencies, devDependencies etc). 
     - yarn.lock or package-lock.json (on the basis of prefered package manager). 
     - gitignore and README file.
     - config file (nextjs configuration), having reactStrictMode= true (developing mode only feature for highlighting potential problems in applications)
       - it helps to identify unsafe life cyles legacy api usage and a number of other features (recommended set to true).
     - eslintrc file (config for eslint) containing bunch of rules defined by nextjs team.
     - .next folder (generated when dev or build script runs) from this folder nextjs app is served.
     - node_modules folder (where all the dependencies are installed) generated when we run "npm install" or "yarn add" command.
     - styles folder (contains some styles for application) created for better organization of all styles.
     - public folder (an important one) holds all the public resources for our application (icons, images, fonts etc).
       - different from the create-react-app public folder in which main html file is present while in nextjs app html files are generated on the basis of type of project with pre-rendering.
     - pages folder (most important to begin with), alone responsible for the entire routing feature.
       - index.js file is served in the browser.
       - _app.js file in which we can defined layout for our app.
       - api folder in which we can create api for our application.
     - control flow => command (package.json) -> _app.js and then index.js file.
4. Routing intro.
    -  in typicall react app.
       -  3rd party package is installed.
       -  to configure routes "routes.js" file is created.
       -  for each route.
          -  component file and component is created.
          -  component is exported.
          -  component is imported in routes.js file.
          -  new route is configured with the path prop.
    -   in nextjs app.
        -   File-system based routing mechanism.
        -   conventions from nextjs.
            -   when a file is created in pages folder it automatically becomes the route.
            -   by mixing and matching file names with a nested folder structure. it is possible to define most common routing patterns.
5. Routing with pages.
    -   scenario 1.
        -   Home page (index.js). this file or route will map to the root of your domain.
    -   scenario 2.
        -   About and Profile route => define two new routes in pages folder.
        -   pages are associated with routes based on their file name.
6. Nested Routes (Routing with pages).
    -   scenario 3.
        -   /blog, /blog/first, and /blog/second => just create blog folder and create the files inside it.
7. Dynamic Routes (Routing with pages). 
   - defining routes by pre-defined paths is not always enough for complex application.
   - scenario 4.
     - product listing and detail page.
       - /product => all products, /product/id => detail product page showing the detail of the product based on passed Id. 
       - we can create dynamic routes using special file name i-e square bracket containing whatever name you passed to it like [id or itemId].js 
       - in nextjs app to extract the query params passed(to the route-url) we need to use (nextjs hook => useRouter).
       - call useRouter hook inside fn() body which return query parameter object.
       - keep in mind that nextjs first see for the specific route or page even though if the dynamic route is also defined.
     <!-- - comparison b/w css and sass variable
       -  compatibility. (sass almost 100% b/c it compiles into actual values not css variables like variables defined with actual css syntax.)
   - map is a key value pair like associated array or js object.
   - nesting (one of the best feature of sass basis on your project be careful in using too much nesting. using classes instead nest after nest is better.)
   - partial files 
     - seperating files with sass we can create partial sass files that contains little snippets of css and compiler ignore those files begining with (_).
     - to include it just use @import 'file'
   - functions => similar to js function but in syntax we add @ symbol.
   - mixins => are similar to functions and we can also pass arguments to mixin like function.
     - remember functions should be used to compute values and mixin should define styles 
     - examples => choosing b/w flex-directions and light/dark theme.
   - extensions => to extend the style from other class etc.
   - operation => +, -, *, / in css we use calc function but in scss
     we can do it directly as a + b etc, but one thing to remember that in css unit type can be different but in scss the unit type
     should be of same type. -->