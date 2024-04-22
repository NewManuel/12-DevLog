# DevLog (Model-View-Controller (MVC): Tech Blog)

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
YOU WANT a CMS-style blog site
SO THAT YOU can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN YOU visit the site for the first time
THEN YOU are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN YOU click on the homepage option
THEN YOU are taken to the homepage
WHEN YOU click on any other links in the navigation
THEN YOU are prompted to either sign up or sign in
WHEN YOU choose to sign up
THEN YOU are prompted to create a username and password
WHEN YOU click on the sign-up button
THEN YOUR user credentials are saved and YOU are logged into the site
WHEN YOU revisit the site at a later time and choose to sign in
THEN YOU are prompted to enter my username and password
WHEN YOU are signed in to the site
THEN YOU see navigation links for the homepage, the dashboard, and the option to log out
WHEN YOU click on the homepage option in the navigation
THEN YOU are taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN YOU click on an existing blog post
THEN YOU are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN YOU enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN YOU click on the dashboard option in the navigation
THEN YOU are taken to the dashboard and presented with any blog posts YOU have already created and the option to add a new blog post
WHEN YOU click on the button to add a new blog post
THEN YOU are prompted to enter both a title and contents for my blog post
WHEN YOU click on the button to create a new blog post
THEN the title and contents of my post are saved and YOU are taken back to an updated dashboard with my new blog post
WHEN YOU click on one of my existing posts in the dashboard
THEN YOU are able to delete or update my post and taken back to an updated dashboard
WHEN YOU click on the logout option in the navigation
THEN YOU are signed out of the site
WHEN YOU are idle on the site for more than a set time
THEN YOU are able to view posts and comments but YOU are prompted to log in again before YOU can add, update, or delete posts
```
## Contributors 

```
Google, ChatGpt, and Morzilla.
```
### License

>Text

### Video

* Link:


## Gif

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 


## Links

* The URL of the functional, deployed application:

* The URL of the GitHub repository, with a unique name and a readme describing the project: https://github.com/NewManuel/13-Tutor.the.Regex