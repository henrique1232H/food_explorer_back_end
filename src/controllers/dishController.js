const knex = require("../database/knex")
const sqlConnection = require("../database/sqlite")

class dishController {
    //POST
    async create(req, res) {
        const {title, category, price, description} = req.body;
        const {id} = req.params

        const database =  await sqlConnection()
        const checkIfUserExists = await database.get("SELECT * FROM User WHERE id = (?)", [id]);


        if(!checkIfUserExists) {
            return res.status(404).send({
                message: "This user don't exists!"
            })
        }

        if(checkIfUserExists.isAdmin !== "1") {
            return res.status(401).send({
                message: "You need authorization to create a new dish!"
            })
        }

        const checkIfDishIsAlreadyCreated = await knex("dish").where("title", title).count();

        if(checkIfDishIsAlreadyCreated[0]["count(*)"] > 0) {
            return res.status(401).send({
                message: "This dish is already created!"
            })
        }

        await knex("dish").insert({
            title,
            category,
            price,
            description,
            user_id: id

        })
        return res.send({
            message: "create dish!"
        })

    }

    //GET
    async show(req, res) {
        const allDish = await knex("dish").select("*");
        res.send(allDish)
        
    }

    //PUT
    async update(req, res) {
        const {title, category, price, description} = req.body;

    }
    //DELETE
    async remove(req, res) {

    }
}

module.exports = dishController