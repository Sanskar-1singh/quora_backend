const {questionController}=require('../../controllers');

async function questionRoutes(fastify,options){

    console.log("from question")
    fastify.post('/question',questionController.createQuestion);
    fastify.post('/question/:id',questionController.updateQuestion);
    fastify.get('/question',questionController.findQuestion);
    
}

module.exports=questionRoutes;  