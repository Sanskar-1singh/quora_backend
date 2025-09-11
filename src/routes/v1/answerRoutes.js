const {answerController}=require('../../controllers');

async function answerRoutes(fastify,options){

    console.log("from answer")
fastify.post('/answer',answerController.create);
fastify.patch('/answer/:id',answerController.update);//answer ID
fastify.get('/answer/:id',answerController.findbyID);
fastify.delete('/answer/:que/:ans',answerController.deleteAns);
    
}

module.exports=answerRoutes;  