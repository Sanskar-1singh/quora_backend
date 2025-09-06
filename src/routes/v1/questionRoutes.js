const {questionController}=require('../../controllers');

async function userRoutes(fastify,options){

    fastify.post('/question',questionController.createQuestion);
    fastify.post('/question/:id',questionController.updateQuestion);
    fastify.get('/question',questionController.findQuestion);
    
}

module.exports=userRoutes;  