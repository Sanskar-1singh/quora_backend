const {likeController}=require('../../controllers');

async function likeRoutes(fastify,options){
    fastify.post('/like/inc/:id',likeController.increaseLike);
    fastify.post('/like/dec/:id',likeController.decreaseLike);
     fastify.delete('/like/:id',likeController.deleteLike);
}

module.exports=likeRoutes;  