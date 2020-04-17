const GraphQL = require('graphql');
const {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
} = GraphQL;



exports.mobileNumberInputType = new GraphQLInputObjectType({
    name: 'mobileNumberInput',
    description: 'Accept only mobile number in input',
    fields: () => ({
        mobileNumber: {
            type: GraphQLString,
            description: 'Phone number of the user',
        },
    })
});

exports.messageOutputType = new GraphQLObjectType({
    name: 'messageOutput',
    description: 'Send success message',
    fields: () => ({
        message: {
            type: GraphQLString,
            description: 'Success message string',
        },
    })
});


exports.initOutputType = new GraphQLObjectType({
    name: 'initOutput',
    description: 'Init response structure',
    fields: () => ({
        appVersion: {
            type: GraphQLString,
            description: 'Return app version',
        },
    })
});

