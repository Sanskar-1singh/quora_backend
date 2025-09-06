const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.port || 3000,
    AWS_REGION:process.env.AWS_REGION,
    AWS_BUCKET_NAME:process.env.AWS_BUCKET_NAME,
    AWS_SECRET_ACCESS_KEY:process.env.AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_KEY_ID:process.env.AWS_ACCESS_KEY_ID

}