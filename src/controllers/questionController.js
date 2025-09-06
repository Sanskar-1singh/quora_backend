const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/Response");

async function createQuestion(req,res){
    try {
        const response=await this.questionService.createQue(req.body);
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully created the quetion";
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}

async function findQuestion(req,res){
    try {
        console.log(req.query);
        const response=await this.questionService.findQue(req.query.question);
        SuccessResponse.data=response;
        console.log(SuccessResponse)
        SuccessResponse.message="Successfully fetched the quetion";
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}


async function updateQuestion(req,res){
    try {
        console.log(req.params.id)
        const response=await this.questionService.updateQue(req.params.id,{...req.body});
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully updated the quetion";
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}

module.exports={
    createQuestion,
    findQuestion,
    updateQuestion
}