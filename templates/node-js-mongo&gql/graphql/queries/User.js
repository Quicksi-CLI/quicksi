const GraphQL = require('graphql');
const auth = require('../../config/auth');

const {
	GraphQLList,
	GraphQLID,
    GraphQLString,
	GraphQLNonNull,
} = GraphQL;

// import the user type we created
const UserType = require('../types/User');
const AddressType = require('../types/Address');

// import the user resolver we created
const UserResolver = require('../resolvers/User');


module.exports = {

	index() {
		return {
			type: new GraphQLList(UserType),
			description: 'This will return all the users present in the database',
			resolve(parent, args, context, info) {
				return UserResolver.index({});
			}
		}
	},

	single() {
		return {
			type: UserType,
			description: 'This will return data of a single users based on the id provided',
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
					description: 'Please enter user id',
				}
			},
			resolve(parent, args, context, info) {
				return UserResolver.single({ id: args.id });
			}
		}
	},

	me() {
		return {
			type: UserType,
			description: 'This will return current user profile details',
			resolve(parent, args, context, info){
                if (auth.isAuthenticated(context)) {
                    return context.user;
                }
            }
		}
	},

    userAddress() {
		return {
			type: AddressType,
			description: 'This will return current user profile details',
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                    description: 'Please enter address id',
                }
            },
			resolve(parent, args, context, info){
                if (auth.isAuthenticated(context)) {
                	return context.user.address.id(args.id);
                }
            }
		}
	},

};

