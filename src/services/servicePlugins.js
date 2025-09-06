const userService=require('./userService');
const fastifyPlugins=require('fastify-plugin');

async function servicePlugins(fastify,options){
    fastify.decorate("userService",new userService(fastify.userRepository));
}

module.exports=fastifyPlugins(servicePlugins);