const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/Response");

async function create(req,res){
    try {
        const response=await this.answerService.create(req.body);
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully created answer for the question";

        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}

async function update(req,res){
    try {
        const response=await this.answerService.update(req.params.id,{...req.body});
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully update answer for the question";
         
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}

async function findbyID(req,res){
    try {
        const response="skjdh";
       // const response=await this.answerService.findAllbyID(req.params.id);//questionID
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully fetched all the answer for the question";
        console.log("dj")
         return res.redirect('https://www.zomato.com');
        //return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}

async function deleteAns(req,res){
    try {
        const response=await this.answerService.getansDelete(req.query.question,req.query.answer);
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully deleted all the answer for the question";

        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}



module.exports={
    create,
    deleteAns,findbyID,update

}