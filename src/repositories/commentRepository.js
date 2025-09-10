const { StatusCodes } = require("http-status-codes");
const db = require("../models");
const { AppError } = require("../utils");
const comments = db.comments;
const questions=db.questions;
const answers=db.answers;

class commentRepository{
    constructor(){
        this.model=comments;
    }

   /**
    * data->{
    *       description,commentType,
    * }
    * (referId)->params
    */
    async createComment(Id,data){
        try {
           if(data.cmtType=='ANSWER'){
                const check=await answers.findOne({
                    where:{
                        id:Id
                    }
                });
                 if(!check){
                    throw new AppError("error","comment type answer not found",StatusCodes.BAD_REQUEST);
                }
                else{
                       data.referId=Id;
                       const response=await this.model.create(data);
                       return response;
                }
           }
                if(data.cmtType=='QUESTION'){
                const check=await questions.findOne({
                    where:{
                       id:Id
                    }
                });
                 if(!check){
                    throw new AppError("error","comment type question not found",StatusCodes.BAD_REQUEST);
                }
                else{
                       data.referId=Id;
                       const response=await this.model.create(data);
                       return response;
                }
           }
           
                if(data.cmtType=='COMMENT'){
                const check=await questions.findOne({
                    where:{
                        id:Id
                    }
                });
                 if(!check){
                    throw new AppError("error","comment type comemnt not found",StatusCodes.BAD_REQUEST);
                }
                else{
                       data.referId=Id;
                       const response=await this.model.create(data);
                       return response;
                }
           }
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * id->referId->params
     * data->description
     */
     async updateComment(Id,data){
        try {
            const response=await this.model.update(data,{
                where:{
                    referId:Id
                }
            });
         if(response[0]==0){
            throw new AppError("error","not find any comment",StatusCodes.BAD_REQUEST);
         }
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw error;
        }
     }

      /**
       * ids->comment table Pk ->params
       * Id->referId  ->params
       */
     async deleteComment(ids,Id){
        try {
            const response=await this.model.destroy({
                where:{
                    id:ids,
                    referId:Id
                }
            });
             if(response==0){
                throw new AppError("error","not able to find comment",StatusCodes.NOT_FOUND);
            }
            return response;
        } catch (error) {
            throw error;
        }
     }

}

module.exports=commentRepository;