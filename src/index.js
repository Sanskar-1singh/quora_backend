const fastify=require("fastify")({logger:true});
const serverConfig=require('./config/serverConfig');
const app=require('./app');


fastify.register(app);

fastify.listen({port:serverConfig.PORT},async function starting(err){
    if(err){
        fastify.log.error(err);
    }
    console.log(`server started at port ${serverConfig.PORT}`);
});