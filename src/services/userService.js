const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");

class UserService{
    constructor(repository){
       this.repository=repository;
    }

    async createUser(data){
        try {
            console.log("service")
            const response=await this.repository.createUser(data);
            return response;
        } catch (error) {
             if(error.name=='SequelizeUniqueConstraintError'){
            let explanation=[];
             error.errors.forEach((err)=>{
                explanation.push(err.message);
             });
             console.log(explanation);
             throw new AppError("error",explanation,StatusCodes.BAD_REQUEST);
        }
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteProfilepicture(id){
        try {
            const response=await this.repository.removePicture(id);
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async updateUser(id,data){
        try {
            const response=await this.repository.update(id,data);
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async findUserById(id){
        try {
            const response=await this.repository.findUser(id);
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async findUsers(){
         try {
            const response=await this.repository.findAll();
            return response;
         } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
         }
    }

    async deleteUser(id){
        try {
            const response=await this.repository.deleteUser(id);
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports=UserService;