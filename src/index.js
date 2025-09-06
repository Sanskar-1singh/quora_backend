const fastify=require("fastify")();
const serverConfig=require('./config/serverConfig');
const app=require('./app');


fastify.register(app);

fastify.listen({ port: 3000, host: '0.0.0.0' },async function starting(err){
    if(err){
        fastify.log.error(err);
    }
    console.log(`server started at port ${serverConfig.PORT}`);
});