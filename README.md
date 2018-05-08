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

## Step-3: (branch-name => seperation_of_concerns)
- In this merge we seperate out schemas and resolvers into folders there by making each block into a individual schema and a resolver file.
- We also cleaned the code a bit and created two new table in the postgres database locally.
- The schemas present can be used on the client side to query and mutate the database, in short it can be used to build a frontend application.


## To run
```
> yarn start
> access the localhost:8080/graphiql 
> check the docs or type { hello } query
```
