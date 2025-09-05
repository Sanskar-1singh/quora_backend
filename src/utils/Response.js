const SuccessResponse={
    sucess:true,
    message:"Sucessfully fetched the data",
    data:{},
    error:{},
    statuscode
}

const ErrorResponse={
    sucess:false,
    message:"something went wrong",
    data:{},
    error:{},
    statuscode
}
module.exports={
    SuccessResponse,
    ErrorResponse
}