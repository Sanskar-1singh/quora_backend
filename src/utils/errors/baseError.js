class AppError extends Error{
    constructor(name,description,details,statuscode){
        super(description);
        this.name=name;
        this.description=description;
        this.statuscode=statuscode;
    }
}

module.exports=AppError;