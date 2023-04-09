import {ApolloServer, gql} from "apollo-server";

let tweets = [
    {
        id: "1",
        text: "first one",
        userId: "2"
    },
    {
        id: "2",
        text: "second one",
        userId: "1"
    },
];

let users = [
    {
        id: "1",
        firstName: "nico",
        lastName: "las",
    },
    {
        id: "2",
        firstName: "yoon",
        lastName: "jo"
    }
]

const typeDefs = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        """
        Is the sum of firstName + lastName as a string
        """
        fullName: String!
    }
    """
    Tweet object represents a resource for a Tweet
    """
    type Tweet {
        id: ID!
        text: String!
        author: User
    }
    type Query {
        allUsers: [User!]!
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        """
        Deletes a Tweet if found, else returns false
        """
        deleteTweet(id: ID!): Boolean!
    }
`;

const resolvers = {
    Query: {
        allTweets(){
            return tweets;
        },
        tweet(root, {id}){
            return tweets.find(tweet => tweet.id === id);
        },
        allUsers(){
            console.log("allUsers called");
            return users;
        }
    },
    Mutation: {
        postTweet(_, {text, userId}){
            const newTweet = {
                id: tweets.length + 1,
                text,
                userId
            };
            tweets.push(newTweet);
            return newTweet;
        },
        deleteTweet(_, {id}){
            const tweet = tweets.find(tweet => tweet.id === id);
            if(!tweet) return false;
            tweets = tweets.filter(tweet => tweet.id !== id);
            return true;
        }
    },
    User: {
        fullName({firstName, lastName}){
            return `${firstName} ${lastName}`;
        }
    },
    Tweet: {
        author({userId}){
            const result = users.find(user => user.id === userId);
            if(!result){
                console.log("there is no right id");
                return null;
            }
            return result;
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
});