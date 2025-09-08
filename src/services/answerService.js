class answerService{
    constructor(repo){
       this.repo=repo;
    }

    async create(data){
        try {
            const response=await this.repo.createAnswer(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async update(id,data){
        try {
            const response=await this.repo.updateAnswer(id,data);
            return response;
        } catch (error) {
            throw error;
        }
    }
     //id->question ID
    async findAllbyID(id){
        try {
            const response=await this.repo.findAllAnswerById(id);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getansDelete(quesID,ansId){
        try {
            const response=await this.repo.deleteAnswer(quesID,ansId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports=answerService;