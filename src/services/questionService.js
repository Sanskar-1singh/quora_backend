const AppError = require("../utils/errors/baseError");

class questionService{
    constructor(repo){
        this.repo=repo;
    }

    async createQue(data){
        try {
            console.log("service")
            const response=await this.repo.createquestion(data);
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

     async findQue(data){
        try {
            console.log("service")
            const response=await this.repo.findQuestion(data);
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

     async updateQue(id,data){
        try {
            console.log("service")
            const response=await this.repo.modifyQuestion(id,data);
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

}

module.exports=questionService;