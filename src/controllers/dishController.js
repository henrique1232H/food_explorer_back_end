class dishController {


    //POST
    async create(req, res) {
        const {name, category, price, description} = req.body;

    }

    //PUT
    async update(req, res) {
        const {name, category, price, description} = req.body;

    }
    //DELETE
    async remove(req, res) {

    }
}

module.exports = dishController