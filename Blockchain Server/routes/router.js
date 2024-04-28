const express = require("express")

const router = express.Router()

const { addUserFunction } = require("../controllers/controller")

router.post("/addUser", addUserFunction);


module.exports = router