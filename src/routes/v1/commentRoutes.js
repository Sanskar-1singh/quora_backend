const {commentController}=require('../../controllers');

async function commentRoutes(fastify,options){
   
    fastify.post('/comment/:id',commentController.createComment);
    fastify.patch('/comment/:id',commentController.CommentUpdate);
    fastify.delete('/comment/:referId/"primary:Id',commentController.DeleteComment);
    
    
}

module.exports=commentRoutes;  