class commentService{
    constructor(repo){
        this.repo=repo;
    }
/**
    * data->{
    *       description,commentType,
    * }
    * (referId)->params
    */
    async makeComment(id,data){
       try {
        console.log(id,data)
            //id->referId
        const response=await this.repo.createComment(id,data);
        return response;
       } catch (error) {
            throw error;
       }
    }

    async commentUpdate(id,data){
        try {
            const response=await this.repo.updateComment(id,data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async commentDelete(ids,ID){
        try {
            const response=await this.repo.deleteComment(ids,ID);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports=commentService;