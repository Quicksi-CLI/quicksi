const GraphQL = require('graphql');
const {
	GraphQLObjectType,
	GraphQLSchema,
} = GraphQL;


// import the user query file we created
const UserQuery = require('./queries/User');
const InitQuery = require('./queries/Init');

// import the user mutation file we created
const UserMutation = require('./mutations/User');


// lets define our root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by the backend',
	fields: {
	    // Init
        init: InitQuery.index(),
	    // User
		users: UserQuery.index(),
		user: UserQuery.single(),
		me: UserQuery.me(),
		userAddress: UserQuery.userAddress(),
	},
});


// lets define our root mutation
const RootMutation = new GraphQLObjectType({
	name: 'Mutation',
	description: 'Default mutation provided by the backend APIs',
	fields: {
	    // User
        loginUser: UserMutation.login(),
		addUser: UserMutation.create(),
		updateUser: UserMutation.update(),
		addDeviceTokenUser: UserMutation.fcm(),
		addUserAddress: UserMutation.createAddress(),
		updateUserAddress: UserMutation.updateAddress(),
		deleteUserAddress: UserMutation.deleteAddress()
	},
});



// export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation,
});

