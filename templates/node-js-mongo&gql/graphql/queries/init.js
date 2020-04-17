const GraphQL = require('graphql');
const auth = require('../../config/auth');
const Generic = require('../types/Generic');

const {
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
} = GraphQL;

// import the init resolver we created
const InitResolver = require('../resolvers/Init');


module.exports = {

    index() {
        return {
            type: Generic.initOutputType,
            description: 'Return app initialization data',
            resolve(parent, args, context, info) {
                return InitResolver.index({});
            }
        }
    }
};