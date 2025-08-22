const express= require('express')
const router= express.Router()
const controller = require("../controller/notesController")

router.get("/",controller.getAllNotes)
router.get("/:id",controller.getNotebyId)
router.post("/",controller.createNote)
router.put('/:id',controller.updatedNoteById)
router.delete('/:id',controller.deleteNoteById)

module.exports=router