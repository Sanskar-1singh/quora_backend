const { StatusCodes } = require("http-status-codes");
const user = require("../models/user");
const { AppError } = require("../utils");

class UserRepository{
    constructor(){
        this.Usermodel=user;
    }

    async createUser(data){
        try {
             const response=await this.Usermodel.create(data);
             return response;
        } catch (error) {
            throw new AppError("error","not able to create entry in db",StatusCodes.INTERNAL_SERVER_ERROR);
        }
       
    }
    async findUser(id){
        try {
            const response=await this.Usermodel.findByPk(id);
            if(response==null){
                throw new AppError("error","not able to find user",StatusCodes.BAD_REQUEST);
            }
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteUser(id){
        try {
            const response=await this.Usermodel.destroy({
                where:{
                    id:id,
                },
        })
        if(!response){
            throw new AppError("error","not able to find user",StatusCodes.BAD_REQUEST);
        }
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
module.exports=UserRepository;