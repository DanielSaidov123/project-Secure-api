import express from "express"
import { createNote, getMyNote } from "../controllers/note.controlers.js"
import { protect } from "../middleware/usersMiddleware.js"

const router = express.Router()

router.post("/create" ,protect, createNote)
router.get("/myNotes" ,protect, getMyNote)

export default router