const { StatusCodes } = require("http-status-codes");
const db = require("../models");
const { AppError } = require("../utils");
const { InstanceError } = require("sequelize");
const likes = db.likes;
const questions=db.questions;
const answers=db.answers;
const comments=db.comments;

class likeRepository{
    constructor(){
       this.model=likes;
    }

     //id is either questionid,answerId,comementId
    async likeincrease(Id,data){
        try {
            console.log(data);
             let question=false;
             let answer=false;
             let comment=false;

             if(data.likeType=='ANSWER'){
                const check=await answers.findByPk(Id);
                if(!check){
                    throw new AppError("error","likeable type answer not found",StatusCodes.BAD_REQUEST);
                }
                answer=await this.model.findOne({
                    where:{
                        referId:Id,
                        likeType: 'ANSWER'
                    }
                });
                if(!answer){
                    console.log("sdj")
                    data.referId=Id;
                    data.count=1;
                    const response=await this.model.create(data);
                    console.log(response)
                    return response;
                }
                else{
                    const response=await this.model.increment('count',{
                        by:1,
                        where:{referId:Id}
                    });
                    return response;
                }
             }
               else if(data.likeType=='QUESTION'){
                     const check=await questions.findByPk(Id);
                if(!check){
                    throw new AppError("error","likeable type question not found",StatusCodes.BAD_REQUEST);
                }
                 question=await this.model.findOne({
                    where:{
                        referId:Id,
                        likeType: 'QUESTION'
                    }
                });
                if(!question){
                     data.referId=Id;
                    data.count=1;
                    const response=await this.model.create(data);
                    return response;
                }
                else{
                    const response=await this.model.increment('count',{
                        by:1,
                        where:{referId:Id}
                    });
                    return response;
                }
             }

            else if(data.likeType=='COMMENT'){
                     const check=await comments.findByPk(Id);
                if(!check){
                    throw new AppError("error","likeable type comment not found",StatusCodes.BAD_REQUEST);
                }
                 comment=await this.model.findOne({
                    where:{
                        referId:Id,
                         likeType: 'COMMENT'
                    }
                });
                if(!comment){
                   data.referId=Id;
                    data.count=1;
                    const response=await this.model.create(data);
                    return response;
                }
                else{
                    const response=await this.model.increment('count',{
                        by:1,
                        where:{referId:Id}
                    });
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

     //id is either questionid,answerId,comementId
    async likedecrease(Id,data){
        try {
            let question=false;
             let answer=false;
             let comment=false;

             if(data.likeType=='ANSWER'){
                const check=await answers.findByPk(Id);
                if(!check){
                    throw new AppError("error","likeable type answer not found",StatusCodes.BAD_REQUEST);
                }
                answer=await this.model.findByPk(Id);
                if(!answer){
                  throw new AppError("error","likeable type answer count not found",StatusCodes.BAD_REQUEST);
                }
                else{
                    const response=await this.model.decrement('count',{
                        by:1,
                        where:{id:Id}
                    });
                    return response;
                }
             }
                if(data.likeType=='QUESTION'){
                     const check=await questions.findByPk(Id);
                if(!check){
                    throw new AppError("error","likeable type question not found",StatusCodes.BAD_REQUEST);
                }
                question=await this.model.findByPk(Id);
                if(!question){
                     throw new AppError("error","likeable type question count not found",StatusCodes.BAD_REQUEST);
                }
                else{
                    const response=await this.model.increment('count',{
                        by:1,
                        where:{id:Id}
                    });
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
     
    //id is either questionid,answerId,comementId
    async likeDelete(Id){
        try {
            const response=await this.model.destroy({
                where:{
                    id:Id
                }
            });
           return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports=likeRepository;