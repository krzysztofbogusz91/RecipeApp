# RecipeApp 1.0.0

*React, ReactRouter, ES6, fetch, Firebase, Bootstrap4*

My CodersLabs bootcamp end project - simple app conected with two difrent API (recipes, YouTube) and with basic functionality to save favourites to database and check them out later.

App takes user input and based on it returns list of hits from fetch call. User can toggle on specific elements, and on toggle app sends another Api call this time to YouTube - to search for maching list name and display first movie from YT search. (It is not perfect solution some of the movies don't fit to recipes).

App also has filter methods that allow applying "live" filters on list of recipes. 

User can save favourite recipes to data base and then display them on other window where it is posible to delete unwanted elements.

**#Issues:**
- need to move delete call to higher components || Delete funcionaly not working in search for rec. window. 
- if recipe is alredy in favourites there should be a display button for delete (not to add) || Possible to add double hits
- HashRouter - transfer to ReactRouter

