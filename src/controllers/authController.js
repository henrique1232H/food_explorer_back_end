const sqlConnection = require("../database/sqlite")
const { hash, compare } = require("bcrypt")

class authController {
    async create(req, res) {
        const {name, email, password} = req.body;

        const database = await sqlConnection();
        const passwordHashed =  await hash(password, 5);
        const checkIfEmailExists = await database.get("SELECT * FROM User WHERE email = (?)", [email]);


        if(checkIfEmailExists) {
            return res.status(401).send({
                message: "This email already exists"
            });
        };

        database.run("INSERT INTO User (name, email, password) VALUES (?,?,?)", [name, email, passwordHashed]);

        return res.send({
            message: "Create new user!"
        });

    };

    async show(req, res) {
        const {email, password} = req.body;

        const database = await sqlConnection();

        const user = await database.get('SELECT * FROM User WHERE email = (?)', [email]);

        const comparePassword = await compare(password, user.password);

        if(!comparePassword) {
            return res.status(404).send({
                message: "senha ou email errado"
            }) 
        }
        
        return res.send(user)

    }c
}

module.exports = authController