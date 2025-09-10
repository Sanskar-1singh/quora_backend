const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/Response");

async function createComment(req,res){
    try {
        console.log(req.body,req.params.id)
        const response=await this.commentService.makeComment(req.params.id,{...req.body});
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully made the comment";

        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorResponse);
    }
}

async function CommentUpdate(req,res){
    try {
        const response=await this.commentService.commentUpdate(req.params.id,{...req.body});
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully update the comment";

        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorResponse);
    }
}

async function DeleteComment(req,res){
    try {
        const response=await this.commentService.commentDelete(req.params.referId,req.params.primaryId);
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully made the comment";

        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorResponse);
    }
}


module.exports={
    createComment,
    DeleteComment,
    CommentUpdate

}