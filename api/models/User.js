const db = require('../init');

class Users {
    constructor(data){
        this.id = data.id
        this.username = data.username
        this.score = data.score

    }

    // Function to get all users
    static get all(){
        return new Promise(async (resolve, reject) => {
            try{
                const result = await db.query(`SELECT * FROM users ORDER BY score DESC;`)
                const users = result.rows.map(r => new Users(r));
                resolve(users);
            } catch(error){
                reject("Could not retrieve users!")
            }
        });
    };

    // Function to make a new user
    static createUser(data){
        return new Promise(async (resolve, reject) => {
            try {
                if (data[0] && !data[1] && !data[2] && !data[3]){
                    const user1 = await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[0].username, data[0].score])
                    resolve ([user1.rows[0]])
                } else if (data[0] && data[1] && !data[2] && !data[3]){
                    const user1 = await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[0].username, data[0].score])
                    const user2 = await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[1].username, data[1].score])
                    resolve ([user1.rows[0], user2.rows[0]])
                } else if (data[0] && data[1] && data[2] && !data[3]){
                    const user1= await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[0].username, data[0].score])
                    const user2= await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[1].username, data[1].score])
                    const user3= await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[2].username, data[2].score])
                    resolve ([user1.rows[0], user2.rows[0], user3.rows[0]])
                } else if (data[0] && data[1] && data[2] && data[3]){
                    const user1= await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[0].username, data[0].score])
                    const user2= await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[1].username, data[1].score])
                    const user3= await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[2].username, data[2].score])
                    const user4= await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data[3].username, data[3].score])
                    resolve ([user1.rows[0], user2.rows[0], user3.rows[0], user4.rows[0]])
                } 
            } catch (error) {
                reject("Could not create a user")
            }
        })
    }

    // static createUser(data){
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //                 const user = await db.query(`INSERT INTO users (username, score) VALUES ($1, $2) RETURNING *;`, [data.username, data.score])
    //                 resolve ([user.rows[0]])
                
    //         } catch (error) {
    //             reject(`Failed to store user`)
    //         }
    //     })
    // }

}

module.exports = Users;
