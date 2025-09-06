const fastifyPlugins=require('fastify-plugin');
const repoPlugins = require('./repositories/repoPlugins');
const servicePlugins = require('./services/servicePlugins');


async function app(fastify,options){
    await fastify.register(repoPlugins);
    await fastify.register(servicePlugins);
    await fastify.register(require('./routes/apiRoutes'),{prefix:'/api'});
}

module.exports=fastifyPlugins(app);