const {answerController}=require('../../controllers');

async function answerRoutes(fastify,options){

    console.log("from answer")
fastify.post('/answer',answerController.create);
fastify.patch('/answer/:id',answerController.update);
fastify.get('/answer/:id',answerController.findbyID);
fastify.delete('/answer',answerController.deleteAns);
    
}

module.exports=answerRoutes;  