const {gql} = require('apollo-server-express');
const resolver = require('./resolvers');

const typeDefs = gql`
    type Query {
        projects: [Project]
        jobs: [Job]
        bundles: [Bundle]
    }
    
    type Project {
        id: ID!
        name: String!
        descr: String
        customerId: Int
        pmId: Int
        status: Int
        type: Int
        createdat: String       
        updatedat: String       
        duets: String           
        priority: Int
        calculatingkpis: Boolean
        startts: String         
        jobs: [Job]
    }
    
    type Job {
        id: ID!
        projectId: Int!
        name:            String
        src:             String
        tgt:             String
        jobtype:         Int
        transtype:        Int   
        bundles: [Bundle]
    }
    
    type Bundle {
        id: ID!
        jobId: Int
        bundletype: Int
        status: Int
        donestatus: String
        bookmark: Int
    }
    `;

const resolvers = {
    Query: {
        projects() {return resolver.getAllProjects();},
        jobs() {return  resolver.getAllJobs();},
        bundles() {return resolver.getAllBundles();},
    },
}

module.exports = {
    resolvers,
    typeDefs
}

