const {userController}=require('../../controllers');

async function userRoutes(fastify,options){
    fastify.post('/user',userController.create);
    fastify.post('/user/:id',userController.update);
    fastify.get('/user/:id',userController.find);
    fastify.get('/user',userController.findall);
    fastify.delete('/user/:id',userController.deleteUser);
   
    console.log("from v1")
    
    fastify.register(require('./questionRoutes'),{prefix:'/ques'});
    fastify.register(require('./answerRoutes'),{prefix:'/ans'});
    
}

module.exports=userRoutes;  