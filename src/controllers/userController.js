const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/Response");
const s3=require('../config/s3Config');
const { PutObjectCommand } = require("@aws-sdk/client-s3");
const serverConfig = require("../config/serverConfig");

async function create(req, res) {
  try {
    let file;
    const fields = {};

    // Iterate over all parts (files + fields)
    for await (const part of req.parts()) {
      if (part.file) {
        file = part; // pick the file part
      } else {
        fields[part.fieldname] = part.value; // text fields
      }
    }
    // Convert file to buffer
    let fileBuffer;
    if(file){
     await file.toBuffer();
    const key = `profiles/${Date.now()}_${file.filename}`;

    // Upload to S3
    const command = new PutObjectCommand({
      Bucket: serverConfig.AWS_BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: file.mimetype
    });

    await s3.send(command);

    // Construct S3 URL
    const fileUrl = `https://${serverConfig.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    // Add image URL to fields object
    fields.image = fileUrl;
  }

    console.log("Final user data:", fields); // This is your req body equivalent

    // Call your service
    const response = await this.userService.createUser(fields);

    SuccessResponse.data = response;
    SuccessResponse.message = "Successfully created the user";
    return res.status(StatusCodes.OK).send(SuccessResponse);

  } catch (error) {
    console.error(error);
    ErrorResponse.error = error;
    return res.status(error.statuscode || StatusCodes.BAD_REQUEST).send(ErrorResponse);
  }
}

async function update(req,res){
    try {
         let file;
    const fields = {};

    // Iterate over all parts (files + fields)
    for await (const part of req.parts()) {
      if (part.file) {
        file = part; // pick the file part
      } else {
        fields[part.fieldname] = part.value; // text fields
      }
    }
    // Convert file to buffer
    let fileBuffer;
    if(file){
     await file.toBuffer();
    const key = `profiles/${Date.now()}_${file.filename}`;

    // Upload to S3
    const command = new PutObjectCommand({
      Bucket: serverConfig.AWS_BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: file.mimetype
    });

    await s3.send(command);

    // Construct S3 URL
    const fileUrl = `https://${serverConfig.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    // Add image URL to fields object
    fields.image = fileUrl;
  }
  if(fields.remove){
    console.log("jksd");
    const answer=await this.userService.deleteProfilepicture(req.params.id);
        SuccessResponse.data=answer;
        SuccessResponse.message="Successfully updated the user data";
        return res.status(StatusCodes.OK).send(SuccessResponse);
  }
        const response=await this.userService.updateUser(req.params.id,fields);
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
