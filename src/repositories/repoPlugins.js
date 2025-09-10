const answerRepository = require('./answerRepository');
const commentRepository = require('./commentRepository');
const likeRepository = require('./likeRepository');
const questionRepository = require('./questionRepository');
const userRepository=require('./userRepository');
const fastifyPlugins=require('fastify-plugin');

async function repositoryPlugins(fastify,options){
    fastify.decorate("userRepository",new userRepository());
    fastify.decorate("questionRepository",new questionRepository());
    fastify.decorate("answerRepository",new answerRepository());
    fastify.decorate("likeRepository",new likeRepository());
    fastify.decorate("commentRepository",new commentRepository());
}

module.exports=fastifyPlugins(repositoryPlugins);