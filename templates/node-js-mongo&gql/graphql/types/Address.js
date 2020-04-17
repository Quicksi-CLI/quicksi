const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
    GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
    GraphQLList,
} = GraphQL;

const Generic = require('./Generic');


const UserType = new GraphQL.GraphQLObjectType({
	name: 'Address',
	description: 'Address type for managing all the user\'s address in our application.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the address, Generated automatically by MongoDB',
		},
        street: {
            type:  new GraphQLList(GraphQLString),
			description: 'Address streets',
		},
        city: {
			type: GraphQLString,
			description: 'Address city',
		},
        countryId: {
			type: GraphQLString,
			description: 'Address country id',
		},
        locality: {
			type: GraphQLString,
			description: 'Address locality',
		},
        landmark: {
			type: GraphQLString,
			description: 'Address landmark',
		},
        addressType: {
			type: GraphQLString,
			description: 'Address addressType',
		},
        postcode: {
			type: GraphQLString,
			description: 'Address postcode',
		},
		createdAt: {
			type: GraphQLString,
			description: 'Generate system to allow user to have secure resource access',
		},
		updatedAt: {
			type: GraphQLString,
			description: 'Date and time when this users account was last updated',
		}

	})

});


module.exports = UserType;

