const indexController = {

    index(req, res) {
        res.send("teste")
    },

    getByid(req, res) {
    const id = req.params
    res.send(id)
    },
}

module.exports = indexController