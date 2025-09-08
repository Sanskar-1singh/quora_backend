const db = require("../models");
const questions = db.questions;
const {Op}=require('sequelize');
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");

class questionRepository{
      constructor(){
        this.model=questions;
    }
   
    async createquestion(data){
        try {
            const response=await questions.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async modifyQuestion(ids,data){
        try {
            console.log("rec")
            const response=await questions.update(data,{
                where:{
                    id:ids
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }


    async findQuestion(name){
       try {
        const response=await questions.findAll({
            where:{
                description:{
                    [Op.like]:`%${name}%`
                }
            }
        });
        console.log(response)
        if(response.length==0){
            throw new AppError("error","not able to find any question",StatusCodes.NOT_FOUND);
        }
        return response;
       } catch (error) {
          throw error;
       }
    }

    async deleteQuestion(id){
        try {
            const response=await questions.destroy({
                where:{
                    id:id
                }
            });
            if(response==0){
                throw new AppError("error","not able to find user",StatusCodes.NOT_FOUND);
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports=questionRepository;