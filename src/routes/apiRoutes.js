const fastifyPlugins=require('fastify-plugin');

async function apiPlugins(fastify,options){
    console.log("from apiroutes")
    fastify.register(require('./v1/v1Routes'),{prefix:'/v1'});
}

module.exports=apiPlugins;