const answerRepository = require('./answerRepository');
const likeRepository = require('./likeRepository');
const questionRepository = require('./questionRepository');
const userRepository=require('./userRepository');
const fastifyPlugins=require('fastify-plugin');

async function repositoryPlugins(fastify,options){
    fastify.decorate("userRepository",new userRepository());
    fastify.decorate("questionRepository",new questionRepository());
    fastify.decorate("answerRepository",new answerRepository());
    fastify.decorate("likeRepository",new likeRepository());
}

module.exports=fastifyPlugins(repositoryPlugins);