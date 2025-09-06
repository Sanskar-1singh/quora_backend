const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/Response");

async function create(req,res){
    try {
        console.log(req.body);
        const response=await this.userService.createUser(req.body);
        SuccessResponse.data=response;
        SuccessResponse.message="successfully created the user";
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}

async function update(req,res){
    try {
        const response=await this.userService.updateUser(req.params.id,{...req.body});
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully updated the user data";
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}


async function find(req,res){
    try {
        const response=await this.userService.findUserById(req.params.id);
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully fetched the user data";
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}


async function findall(req,res){
    try {
        const response=await this.userService.findUsers();
        SuccessResponse.data=response;
        SuccessResponse.message="Successfully fetched the user's data";
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}


async function deleteUser(req,res){
    try {
        const response=await this.userService.deleteUser(req.params.id);
        SuccessResponse.data={};
        SuccessResponse.message="Successfully deleted the user's data";
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
}



module.exports={
    create,
    update,
    find,
    findall,
    deleteUser
}
