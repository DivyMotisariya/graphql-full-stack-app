const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const graphQLSchema = require("./graphql/schema");
const graphQLResolvers = require("./graphql/resolvers");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true,
  })
);

const uri = "mongodb://localhost:27017/graphql-article-db";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(uri, options)
  .then(() => console.log("Database Connected"))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.listen(8000, () =>
  console.log("Server is running on http://localhost:8000/")
);
