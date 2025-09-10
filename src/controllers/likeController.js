const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/Response");

async function increaseLike(req,res){
    try {
        console.log(req.body);
        const response=await this.likeService.createLike(req.params.id,{...req.body});
        SuccessResponse.data=response;
        SuccessResponse.message=`Successfully updated the like for ${req.params.id}`; 
        return res.status(StatusCodes.OK).send(SuccessResponse);

    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorResponse);
    }
}


async function decreaseLike(req,res){
    try {
        const response=await this.likeService.decreaseLike(req.params.id);
        SuccessResponse.data=response;
        SuccessResponse.message=`Successfully updated the like for ${req.params.id}`; 
        return res.status(StatusCodes.OK).send(SuccessResponse);

    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorResponse);
    }
}

async function deleteLike(req,res){
    try {
        const response=await this.likeService.deleteLike(req.params.id);
        SuccessResponse.data=response;
        SuccessResponse.message=`Successfully updated the like for ${req.params.id}`; 
        return res.status(StatusCodes.OK).send(SuccessResponse);

    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorResponse);
    }
}

module.exports={
    increaseLike,
    deleteLike,
    decreaseLike

}