class authController {
    async create(req, res) {
        const {name, email, password} = req.body;

        console.log(name, email, password);

        return res.send({
            message: "Enviado"
        })

    }

    async show(req, res) {

    }

    async update(req, res) {

    }
}

module.exports = authController