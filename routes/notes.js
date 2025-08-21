const express= require('express')
const router= express.Router()
const controller = require("../controller/notesController")

router.get("/",controller.getAllNotes)
router.get("/:id",controller.getNotebyId)


module.exports=router