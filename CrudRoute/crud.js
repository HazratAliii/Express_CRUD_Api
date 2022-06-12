const router = require('express').Router()
const Contracts = require('../models/contracts')

router.get("/", async(req, res) => {
    const cont = await Contracts.find()
    res.json({
        "contracts":cont
    })
})

router.post("/", async(req, res) => {
    const { name, contract } = req.body
    const contractObj = new Contracts({
        name,
        contract
    })
    await contractObj.save()
    console.log("Inserted");
    res.redirect('/')
})

router.delete('/:id', async(req, res) => {
    await Contracts.deleteOne({id: req.body._id})
    console.log("Contract deleted");
    res.redirect('/');
})

router.put("/:id", async(req, res) => {
    await Contracts.updateOne({_id: req.params.id},{
        $set: {
            name: "Ammu",
            contract: "01728511485"
        }
    })
    console.log("Update successful"); 
    res.redirect('/')
})

module.exports = router

