class likeService{
    constructor(repo){
       this.repo=repo;
    }

    async createLike(id,data){
        try {
            console.log(id,data)
            const response=await this.repo.likeincrease(id,data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async decreaseLike(id){
        try {
            const response=await this.repo.likedecrease(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async deleteLike(id){
        try {
            const response=await this.repo.likeDelete(id);
            return response;
        } catch (error) {
            throw error;
        }
    }
}


module.exports=likeService;
