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

When setting up the routing, I was struggling to set it up, running into various errors until I came to find the docs I was referred to were a version behind.

I finally got it functioning once I got a chance to read over the usage. I abstracted my components to the structure I wanted.

After getting the routing completed. I fixed up the css a little and added some basic animations to give it some interactivity.

After making a fetch request to get a list of currencies, I was able to pass the state to my components. There is some difficulty in trying to find the selected value and lifting the state up.

It took me a bit to figure out how bubbling state is done, but once I did I got a few of the components working.
Some things that I still want to do.

1. Chart Feature
2. Connect hrefs to footer icons
3. Button animation
4. Autoload on exchange rate tab Amount = 1 Currency = USD
5. DataTable Sort Buttons
6. Flag images for currency icons
7. Load component animations
8. Change tabs to single page on lg screens
9. Change amount to currency symbol
10. Change converted total to be a Symbol with numeric value, currency code minified
11. Add title to page
