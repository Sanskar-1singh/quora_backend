const {userController}=require('../../controllers');

async function userRoutes(fastify,options){
    fastify.post('/user',userController.create);
    fastify.post('/user/:id',userController.update);
    fastify.get('/user/:id',userController.find);
    fastify.get('/user',userController.findall);
    fastify.delete('/user/:id',userController.deleteUser);

    
    fastify.register(require('./questionRoutes'),{prefix:'/'});
    
}

module.exports=userRoutes;  