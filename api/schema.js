var apiModules = require('./modules');
var models = require('./models');
var types = require('./types');

var g = types.graphql;

var apiSchema = new g.GraphQLSchema(
    {
        mutation: new g.GraphQLObjectType({
            name: 'RootMutationType',

            description: 'Endpoints with POST, PUT, and DELETE functionality go here',

            fields: {
                addToMailingList: {
                    args: {
                        emailAddress: {
                            description: 'The email to add to the BEN mailing list',
                            type: new g.GraphQLNonNull(g.GraphQLString)
                        }
                    },

                    description: 'This adds the provided email to the BEN mailing list and sends an introductory email',

                    type: g.GraphQLString,

                    resolve: function(root, args) {
                        return apiModules.mailing.addToMailingList(args);
                    }
                }
            }
        }),

        query: new g.GraphQLObjectType({
            name: 'RootQueryType',

            description: 'Endpoints with GET functionality go here',

            fields: {
                test: {
                    args: {},

                    description: 'This query does nothing',

                    type: g.GraphQLString,

                    resolve: function(root, args) {
                        return Promise.resolve()
                    }
                }
            }
        })
    }
);

module.exports = apiSchema;