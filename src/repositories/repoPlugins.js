const questionRepository = require('./questionRepository');
const userRepository=require('./userRepository');
const fastifyPlugins=require('fastify-plugin');

async function repositoryPlugins(fastify,options){
    fastify.decorate("userRepository",new userRepository());
    fastify.decorate("questionRepository",new questionRepository());
}

module.exports=fastifyPlugins(repositoryPlugins);