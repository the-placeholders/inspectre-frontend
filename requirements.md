What is the vision of this product?

The vision is to eventually have a community of people who actively like to visit haunted places and post reviews and stories of thier own 

What pain point does this project solve?

Being able to easily find and plan haunted places of interest

Why should we care about your product?

Because it adds entertainment/fun to our mundane lives

Scope (In/Out)
IN - What will your product do
Map - Show a map with pins( by city / state) of haunted locations near the user entered location
Stories - displace stories of why that location is of significance
Have a Library of Death - a logged in user will be able to see his favourite haunted places , and have the ability to add/ delete from his personal library
Reviews - Have user reviews shown of the particular locations along with ability to add review/ add data to locations already in database 


OUT - What will your product not do.
we will never monetize this product
we will never share user info

Minimum Viable Product vs
What will your MVP functionality be?
Our MVP will be able to show the user all the haunted locations around the area that  the user searches for . And will be able to add/ view reviews , and update the images for the locations in the db , and add new locations into the db. Have a favourites button

What are your stretch goals?
Get location automatically
sound fx
call an uber
weather forecast( moon phases) so to change background image accordingly

Stretch
What stretch goals are you going to aim for?
sound fx 
moon phase

Functional Requirements
List the functionality of your product. This will consist of tasks such as the following:

An admin can create and delete user accounts
A user can update their profile information
A user can search all of the places the user would like to / or have visited
Have a raadio button for places visited in the library of death
Ability to add review / udate image / add new stories



Data Flow
Client makes a req.query to the server . Server makes a req.query to Mongo DB , Mondo res.send(data) back to server. Server uses the lat lon , to query the location.iq to res.send(location map img with pin) to server , this info is sent to client in form of cards 

Non-Functional Requirements (301 & 401 only)
Auth 0  --- for security and using login authorization , allowing the user to use user email address / password to sign in. , and use that info to make it personalized

REACT-BOOTSTRAP   --- for making everyhting more user friendly , eg displayed carousel so that it is easier and more engaging for the user to interact with the app .



