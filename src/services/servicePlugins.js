const questionService = require('./questionService');
const userService=require('./userService');
const fastifyPlugins=require('fastify-plugin');

async function servicePlugins(fastify,options){
    fastify.decorate("userService",new userService(fastify.userRepository));
    fastify.decorate("questionService",new questionService(fastify.questionRepository));
}

module.exports=fastifyPlugins(servicePlugins);