const { StatusCodes } = require("http-status-codes");
const db = require("../models");
const User = db.user;
const { AppError } = require("../utils");

class UserRepository{
    constructor(){
        this.Usermodel=User;
    }

    async createUser(data){
        try {
            console.log("repo")
            console.log(data);
             const response=await this.Usermodel.create(data);
             return response;
        } catch (error) {
            if(error.name=="SequelizeUniqueConstraintError"){
                throw error;
            }
            console.log(error);
            throw new AppError("error","not able to create entry in db",StatusCodes.INTERNAL_SERVER_ERROR);
        }
       
    }
    async findUser(ids){
        try {
            const response=await this.Usermodel.findByPk(ids);
            if(response==null){
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

    async findAll(){
        try {
            const response=await this.Usermodel.findAll();
            return response;
        } catch (error) {
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async update(ids,data){
        try {
            const response=await this.Usermodel.update(data,{
                where:{
                    id:ids
                }
            })
        } catch (error) {
             if(error.name=="SequelizeUniqueConstraintError"){
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

    async removePicture(ids){
        try {
            const response=await this.Usermodel.update({ image: null },{
                 where:{
                       id:ids,
                 }
            });
            if(response[0]==0){
                throw new AppError("error","not able to remove pictures",StatusCodes.BAD_REQUEST);
            }
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async startFollow(userId,followingId){
        try {
            const user=await this.Usermodel.findByPk(userId);
            const target=await this.Usermodel.findByPk(followingId);

            if(!user || !target){
                throw new AppError("error","targetUser or user is not present",StatusCodes.BAD_REQUEST);
            }
            const response=await user.addFollowing(target);
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async findFollower(userId){
        try {
            const user=await this.Usermodel.findByPk(userId);
            if(!user){
                throw new AppError("error","user not find in db",StatusCodes.BAD_REQUEST);
            }
            const response=await user.getFollowers();
            return response;
        } catch (error) {
            if(error instanceof AppError){
                throw error;
            }
            throw new AppError("error","Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
module.exports=UserRepository;