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
const Address = require('./Address');


const UserType = new GraphQL.GraphQLObjectType({
	name: 'User',
	description: 'User type for managing all the users in our application.',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the user, Generated automatically by MongoDB',
		},
		name: {
			type: GraphQLString,
			description: 'Full name of the user',
		},
        gender: {
			type: GraphQLString,
			description: 'Gender of the user',
		},
		picture: {
			type: GraphQLString,
			description: 'Profile picture of the user',
		},

		email: {
			type: GraphQLString,
			description: 'Email address of the user, must be valid and unique',
		},

        isEmailVerified: {
			type: GraphQLBoolean,
			description: 'Email is verified',
		},

        mobileNumber: {
			type: GraphQLString,
			description: 'Phone number of the user',
		},

        isMobileVerified: {
            type: GraphQLBoolean,
            description: 'Mobile number is verified',
        },

		status: {
			type: GraphQLString,
			description: 'Status of the user, whether active or disabled',
		},

        dob: {
			type: GraphQLString,
			description: 'Date of birth in 1992-01-02',
		},

		token: {
			type: GraphQLString,
			description: 'Status of the user, whether active or disabled',
		},

		address: {
			type: new GraphQLList(Address),
			description: 'User address',
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

