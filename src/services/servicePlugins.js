const answerService = require('./answerService');
const commentService = require('./commentService');
const likeService = require('./likeService');
const questionService = require('./questionService');
const userService=require('./userService');
const fastifyPlugins=require('fastify-plugin');

async function servicePlugins(fastify,options){
    fastify.decorate("userService",new userService(fastify.userRepository));
    fastify.decorate("questionService",new questionService(fastify.questionRepository));
    fastify.decorate("answerService",new answerService(fastify.answerRepository));
    fastify.decorate("likeService",new likeService(fastify.likeRepository));
    fastify.decorate("commentService",new commentService(fastify.commentRepository));
}

module.exports=fastifyPlugins(servicePlugins);