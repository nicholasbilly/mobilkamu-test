const Mobil = require('../models/mobil')

class MobilController {
    static create (req, res, next) {
        let { brand, model, image, price, fuel } = req.body
        Mobil.create({ brand, model, image, price, fuel })
        .then(product => {
            res.status(201).json({data: product, message: 'new product created'})
        })
        .catch(next)
    }

    static find(req, res, next) {
        Mobil.find()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(next)
    }

    static findOne(req, res, next) {
        Mobil.findById(req.params.id)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(next)
    }

    static delete(req, res, next) {
        Mobil.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = MobilController