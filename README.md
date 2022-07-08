_Basic Requirements_

1. A list/table showing exchange rates for a base currency against a list of currencies:

   1. User can change the base currency, and the list/table of rates will be updated.
   2. You can either use a drop down menu or a list of links to implement the base currency selection feature. It is up to you, but make sure it's intuitive.

2. A currency converter for a pair of currency, where the user can:

   1. Edit the amount to be converted. Either allow user to swap the direction of the currency pair, or allow amounts on both sides to be edited.
   2. Allow the user to change the currencies being calculated. Using a drop down menu or other means you think is intuitive.

3. Has a navigation bar:

   1. Site name, can be super generic or super fun.
   2. Anchor links if you are going to have multiple pages.

4. Has a footer:

   1. Link to your portfolio site or social media accounts.

5. It needs to be responsive, which means it can be easily used on a mobile browser as well!

6. Version managed with Git, and has a GitHub repository.

7. You need to deploy the production build either onto Netlify or Heroku (Heroku preferred).

_Development Stages_

1. Wire framing: sketch out your application's user interface for desktop and mobile. This is where you can think about your application's user story, the different components you need to build, and the design.

2. Plan React component structure: you can extract from the wire frame the structure of the React components that you will build. This will give you an idea on how to build the app.

3. Create and deploy basic app: deploying to production is an important part of the development process. Even at the very beginning when you just have a skeleton app.

4. Develop and deploy final app: build all the features based on your wire frame and deploy to production. Make sure core features are bug free.

_Structure_

1. App
   1. Navbar
      1. Routes
         1. Route path: Convert Tab
         2. Route path: Exchange Rate Tab
   2. Convert Tab
      1. CurrencyConverter
      2. Graph
   3. Exchange Rate Tab
      1. DataTable
   4. Footer

_Obstacles_

When first building out the components and structure, it took me a bit to figure out bubbling state and setting up the routes. I began to notice that there was a lot of code being passed as props to child components, leading me to believe that perhaps I shouldnt hold so much code in that one file. Ideally I want to try to break processes into seperate files and import/export as needed.

This left me with some questions:

1. Should there be one main component that contains state and passes it as props?
   -To minimize the amount of state being passed as props, it makes sense to me to have separate api files for components to import from and pass on to sub components.

2. How to set up api files.
   -How do I handle an array of promises and then store data to export?
   -How do I make fetch calls from an external component file?

3. Given this supposed structure, when will I need to make use of async/await?

4. App{mainly houses components and stylings}
   1. Converter {imports initial state from api file, get requests to update data, passes props}
      1. Selector {imports props, and onchange functions}
      2. Selector {imports props, and onchange functions}
   2. DataChart {imports initial state}
   3. DataTable {imports Chart.js}
