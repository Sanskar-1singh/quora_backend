const db = require("../models");
const answers = db.answers;
const AppError=require('../utils/errors/baseError');


class answerRepository{
    constructor(){
       this.model=answers;
    }

    async createAnswer(data){
        try {
            console.log(data)
            const response=await this.model.create(data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
             throw new AppError("error","not able to create entry in db",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async updateAnswer(ids,data){
        try {
            const response=await this.model.update(data,{
                where:{
                    id:ids,
                }
            });
            return response;
        } catch (error) {
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async findAllAnswerById(ids){
        try {
            const response=await this.model.findAll({
                where:{
                    id:ids
                }
            });
             if(response.length==0){
                throw new AppError("error","not able to find user",StatusCodes.BAD_REQUEST);
            }
            return response
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteAnswer(quesId,ansId){
        try {
            const response=await this.model.destroy({
                where:{
                    id:ansId,
                    questionId:quesId
                }
            });
            if(!response){
            throw new AppError("error","not able to find user",StatusCodes.BAD_REQUEST);
        }
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports=answerRepository;