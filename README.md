# social-chat-graphql-server
Social chat application server built using postgresql and graphql server

## Step-1: 

- This basic setup is pretty much common for all the graphql implementation.
- The key take away is the babel, nodemon and yarn installation. These are optional, you can choose to run any nodejs utility for auto restart.
- Infact, nodemon is getting on my nerves so I might just replace it with something else in the next branch.
- Graphiql is the final endproduct where you will be able to see the graphql queries in action.

## Step-2: (branch-name => postgres-setup)
- This is the part where we installed postgres via homebrew. once installed please check if you can createdb and change roles.
- After that look at the document for sequelize/express-example to create the models and docs.sequelize for the associations.
- Once you have associated all the models you can run the psql commaned to check your working db and also check out all the tables that are created based on our schema


## To run
```
> yarn start
> access the localhost:8080/graphiql 
> check the docs or type { hello } query
```
