const router = require("express").Router();
const Category = require("../models/Category");


// POST Category
router.post('/',async (req,res)=> {
    const newCat = new Category(req.body)
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET Category
router.get('/',async (req,res)=> {

    try {
        const getCat = await Category.find();
        res.status(200).json(getCat)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;