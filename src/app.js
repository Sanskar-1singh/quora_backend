const fastifyPlugins=require('fastify-plugin');


async function app(fastify,options){
    await fastify.register('./routes/apiRoutes.js',{prefix:'/api'});
}

module.exports=fastifyPlugins(app);