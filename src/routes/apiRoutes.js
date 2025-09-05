const fastifyPlugins=require('fastify-plugin');

async function apiPlugins(fastify,options){
    fastify.register(require('./v1/v1Routes'),{prefix:'/v1'});
}

module.exports=apiPlugins;