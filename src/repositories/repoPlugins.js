const userRepository=require('./userRepository');
const fastifyPlugins=require('fastify-plugin');

async function repositoryPlugins(fastify,options){
    fastify.decorate("userRepository",new userRepository());
}

module.exports=fastifyPlugins(repositoryPlugins);