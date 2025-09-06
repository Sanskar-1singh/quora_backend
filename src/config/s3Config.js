const {S3Client}=require('@aws-sdk/client-s3');
const serverConfig=require('./serverConfig')

const s3=new S3Client({
    region:'ap-south-1',
     credentials: {
     accessKeyId: serverConfig.AWS_ACCESS_KEY_ID,
      secretAccessKey: serverConfig.AWS_SECRET_ACCESS_KEY,
  }
});

module.exports=s3;