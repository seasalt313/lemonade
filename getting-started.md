Your goal is to create an application that allows players to play a single-player version of the Lemonade Stand game (see Gameplay section below). You must:

Maintain all game-related data in at least one service.
Create three components:
a component for displaying stats (the component should display a label and a single value)
a custom button component that will auto-disable itself when the appropriate resources are not available
a component that allows the player to specify a quantity of a resource they want to buy and make the transaction
You should break each component, controller, and service into its own file, and have an app.js that rolls it all together.
You should also have a button that ends the current day and advances the game to the next day. See the 'end of the day' section below for more information on what should happen when this occurs.

An example UI might look like this. Not pictured are the next day button and the lemonade price input box, but there shouldn't be many surprises with those.
