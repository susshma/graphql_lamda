import Customer from './models/customer';
import DealJacket from './models/dealjacket'
import Deal from './models/deal'

import {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} from 'graphql';

const DealJacketType = new GraphQLObjectType({
  name: "Dealjacket",
  description: "Represents the deal jacket",
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLString)},
    status: {type: new GraphQLNonNull(GraphQLString)},
    dealership: { type: GraphQLString },
    created_by: { type: GraphQLString },
    created_time: { type: GraphQLString },
    applicant: {
        type: CustomerType,
        resolve: function(dealjacket) {
            return Customer.findById(dealjacket.applicant)
        }
    },
    coapplicant: {
        type: CustomerType,
        resolve: function(dealjacket) {
            return Customer.findById(dealjacket.coapplicant)
        }
    },
    deal: {
        type: DealType,
        resolve: function(dealjacket) {
            return Deal.findById(dealjacket.deal)
        }
    }
  })
});

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  description: "This represent a customer",
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLString)},
    first_name: {type: new GraphQLNonNull(GraphQLString)},
    last_name: {type: new GraphQLNonNull(GraphQLString)},
    full_name: {
        type: GraphQLString,
        resolve: (customer) => `${customer.first_name} ${customer.last_name}`
    }
  })
});

const VehicleType = new GraphQLObjectType({
    name: "Vehicle",
    description: "This represent a vehicle",
    fields: () => ({
        year: {type: GraphQLString},
        make: {type: GraphQLString},
        model: {type: GraphQLString},
        trim: {type: GraphQLString}
    })
});

const financeType = new GraphQLObjectType({
    name: "finance",
    description: "This represent a finance",
    fields: () => ({
        product_type: {type: GraphQLString},
        cash_selling_price: {type: GraphQLString},
        unpaid_balance: {type: GraphQLString},
        esitmated_monthly_payment: {type: GraphQLString}
    })
});

const DealType = new GraphQLObjectType({
    name: "Deal",
    description: "This represent a deal",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        deal_type: {type: new GraphQLNonNull(GraphQLString)},
        vehilce: { type: VehicleType },
        finance: { type: financeType }
    })
});

// This is the Root Query
const DealJacketQueryRootType = new GraphQLObjectType({
    name: 'Schema',
    description: "Dealjacket Query Root",
    fields: () => ({
        dealjackets: {
            type: new GraphQLList(DealJacketType),
            args: { status: { type: GraphQLString } },
            resolve: (root, args) => DealJacket.find(args,function(err, dealjackets){}).exec()
        }
    })
});


// This is the schema declaration
const DealJacketSchema = new GraphQLSchema({
  query: DealJacketQueryRootType,
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType
});

export default DealJacketSchema
