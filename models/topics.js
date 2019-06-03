const db = require('./conn.js');

class Topics {
    constructor(id, topic, rank){
        this.id = id;
        this.topic = topic;
        this.rank = rank;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from topics`);
            console.log(response);
            return response;
        } catch(err) {
            return err.message;
        }
    }
    
    static async add(topic, rank) {
        const query = `INSERT INTO topics (topics, ranking) VALUES ('${topic}', ${rank})`;
        try {
            let response = await db.result(query);
            console.log(response)
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        };
    }
    
}

module.exports = Topics;